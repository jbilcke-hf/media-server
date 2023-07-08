import { v4 as uuid } from 'uuid'
import { upscaleVideo } from './upscaleVideo.mts'
import { keepVideo } from './keepVideo.mts'

import { getStats } from './getStats.mts'
import { enhanceVideo } from './enhanceVideo.mts'
import { callZeroscope } from './callZeroscope.mts'
import { downloadVideo } from './downloadVideo.mts'
import { getDatabase } from './getDatabase.mts'
import { callMusicgen } from './callMusicgen.mts'
import { interpolateVideo } from './interpolateVideo.mts'

let hasReachedStartingPoint = false

type RunMode = 'running' | 'paused' | 'dry_run'

const status = `${process.env.WEBTV_STATUS || 'dry_run'}` as RunMode

console.log(`Web TV server status: ${status}`)

// to add more diversity to the stream, let's cut down on the length
const maxShotsPerSequence = 10

const main = async () => {
  if (status === 'paused') {
    setTimeout(() => {
      main()
    }, 30000)
    return
  }

  console.log('Reading persistent file structure..')
  const stats = await getStats()

  console.log('nb files:', JSON.stringify(stats, null, 2))

  console.log('Reading prompt database..')
  const db = await getDatabase('./database.json')

  const nbTotalShots = db.sequences.reduce((a, s) => a + s.shots.length, 0)
  console.log(`Prompt database version: ${db.version}`)
  console.log(`We got ${db.sequences.length} sequences for ${nbTotalShots} shots in total`)

  console.log('Generating videos sequences..')
  const instanceId = process.env.WEBTV_WORKER_INSTANCE_ID || '0'

  const startingPointExists = db.sequences.some(seq => seq.shots.some(shot => shot.shotId === db.startAtShotId))
  
  if (!startingPointExists) {
    console.log(`Starting point ${db.startAtShotId} not found, we will start at the beginning`)
    hasReachedStartingPoint = true
  } else if (db.startAtShotId) {
    console.log(`We are going to start at shot ${db.startAtShotId}`)
  } else {
    console.log('We are going to start at the beginning')
  }

  for (const sequence of db.sequences) {
    const containsStartingPoint = sequence.shots.some(shot => shot.shotId === db.startAtShotId)

    // we skip sequences that were already processed
    if (!hasReachedStartingPoint && !containsStartingPoint) {
      continue
    }

    // some sequences can also be skipped by human curation
    if (sequence.skip) {
      continue
    }

    console.log('Re-computing stats..')
    const stats = await getStats()
    console.log('nb files:', JSON.stringify(stats, null, 2))  

    console.log(`
-----------------------------------------------------------
Going to generate ${sequence.shots.length} for prompt:
${sequence.videoPrompt}
`)

    const movieId = uuid()

    const generatedShots: string[] = []

    // this is hardcoded everywhere for now, since videos longer than 3 sec require the Nvidia A100
    const videoDurationInSecs = 3

    let shotIndex = 0

    for (const shot of sequence.shots) {

      if (shot.shotId === db.startAtShotId) {
        hasReachedStartingPoint = true
      }

      if (!hasReachedStartingPoint) {
        shotIndex++
        continue
      }

      console.log(`- generating shot ${shot.shotId}: ${shot.videoPrompt}`)

      if (status === 'dry_run') {
        // console.log('DRY RUN')
        shotIndex++
        continue
      }


      try {
        const generatedVideoUrl = await callZeroscope(shot.videoPrompt)

        // note that we need to use the shot INDEX (not just the ID) 
        // to make sure the order is respected
        const shotFileName = `inst_${instanceId}_movie_${movieId}_seq_${sequence.sequenceId}_shot_index_${shotIndex++}_shot_${shot.shotId}_${Date.now()}.mp4`

        console.log(`- downloading shot ${shotFileName} from ${generatedVideoUrl}`)
        await downloadVideo(generatedVideoUrl, shotFileName)

        console.log(`- downloaded shot ${shotFileName}`)

        console.log('- upscaling shot..')
      
        try {
          await upscaleVideo(shotFileName, shot.videoPrompt)
        } catch (err) {
          // upscaling is finicky, if it fails we try again
          console.log('- trying again to upscale shot..')
          await upscaleVideo(shotFileName, shot.videoPrompt)
        }

        console.log('- enhancing shot..')
        // await interpolateVideo(shotFileName)

        console.log('- enhancing shot..')
        await enhanceVideo(shotFileName)

        console.log(`- saving final shot into ${process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2}`)
        await keepVideo(shotFileName, process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2)

        generatedShots.push(shotFileName)

        console.log('- done!')
      } catch (err) {
        console.log(`- error: ${err}`)
      }

      // for the initial demo, we may want to limit the number of shots per sequence
      if (shotIndex > maxShotsPerSequence) {
        break
      }
    }

    console.log('Finished generating sequence')
    
    const totalRunTime = videoDurationInSecs * generatedShots.length

      if (totalRunTime <= 0) {
        continue
      }

    // TODO: generate music from MusicGen, with the correct length
    // (or we could generate a slightly larger track and let ffmpeg cut it)
    console.log(`TODO: generate ${totalRunTime} seconds of music`)
    await callMusicgen(sequence.audioPrompt) // this does nothing for now
  }

  console.log('Finished the cycle')

  hasReachedStartingPoint = true // set this to true in all cases

  setTimeout(() => {
    main()
  }, 2000)
}

setTimeout(() => {
  main()
}, 3000)
