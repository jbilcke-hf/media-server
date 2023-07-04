import { v4 as uuid } from 'uuid'
import { generateVideo } from './generateVideo.mts'
import { upscaleVideo } from './upscaleVideo.mts'
import { keepVideo } from './keepVideo.mts'

import { demoPrompts } from './prompts.mts'
import { getStats } from './getStats.mts'
import { enhanceVideo } from './enhanceVideo.mts'
import { callZeroscope } from './callZeroscope.mts'
import { downloadVideo } from './downloadVideo.mts'

const main = async () => {
  console.log('Generating ideas..')
  const ideas = demoPrompts

  console.log('Generating videos sequences..')
  const instanceId = process.env.WEBTV_WORKER_INSTANCE_ID || '0'

  for (const { input, captions } of ideas) {
    console.log(`\nVideo sequence to generate: ${input}`)

    const sequenceId = uuid()

    const silentVideos: string[] = []

    // this is hardcoded everywhere for now, since videos longer than 3 sec require the Nvidia A100
    const videoDurationInSecs = 3

    for (const caption of captions) {
      console.log(`- generating shot: ${caption}`)
      try {
        const generatedVideoUrl = await callZeroscope(caption)

        const videoName = `inst_${instanceId}_seq_${sequenceId}_shot_${Date.now()}.mp4`

        console.log(`- downloading ${videoName} from ${generatedVideoUrl}`)
        await downloadVideo(generatedVideoUrl, videoName)

        console.log(`- downloaded ${videoName}`)

        console.log('- upscaling video..')
      
        try {
          await upscaleVideo(videoName, caption)
        } catch (err) {
          // upscaling is finicky, if it fails we try again
          console.log('- trying again to upscale video..')
          await upscaleVideo(videoName, caption)
        }

        console.log('- enhancing video..')
        await enhanceVideo(videoName)

        console.log('- saving final video..')
        await keepVideo(videoName, process.env.WEBTV_VIDEO_STORAGE_PATH_NEXT)

        silentVideos.push(videoName)

        console.log('- done!')
      } catch (err) {
        console.log(`- error: ${err}`)
      }

      const totalRunTime = videoDurationInSecs * silentVideos.length

      if (totalRunTime <= 0) {
        continue
      }

      console.log(`TODO: generate ${totalRunTime} seconds of music`)
      // TODO: generate music from MusicGen, with the correct length
      // (or we could generate a slightly larger track and let ffmpeg cut it)

    }  

    console.log('Finished gerating all video sequences')

    console.log('Current stats:', await getStats())
  }

  console.log('Finished the full cycle')
  setTimeout(() => {
    main()
  }, 3000)
}

setTimeout(() => {
  main()
}, 3000)
