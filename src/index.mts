import { generateVideo } from './generateVideo.mts'
import { upscaleVideo } from './upscaleVideo.mts'
import { keepVideo } from './keepVideo.mts'

import { demoPrompts } from './prompts.mts'
import { getStats } from './getStats.mts'
import { enhanceVideo } from './enhanceVideo.mts'

const main = async () => {
  console.log('Generating ideas..')
  const ideas = demoPrompts

  console.log('Generating videos..')

  for (const { input, captions } of ideas) {
    console.log(`\nVideo to generate: ${input}`)

    const silentVideos: string[] = []

    // this is hardcoded everywhere for now, since videos longer than 3 sec require the Nvidia A100
    const videoDurationInSecs = 3

    for (const caption of captions) {
      console.log(`- generating video.. prompt: ${caption}`)
      try {
        const rawVideo = await generateVideo(caption)

        console.log(`- downloaded ${rawVideo}`)

        console.log('- upscaling video..')
      
        let upscaledVideo = rawVideo
        try {
          upscaledVideo = await upscaleVideo(rawVideo, caption)
        } catch (err) {
          // upscaling is finicky, if it fails we try again
          console.log('- trying again to upscale video..')
          upscaledVideo = await upscaleVideo(rawVideo, caption)
        }

        console.log('- enhancing video..')
        const enhancedVideo = await enhanceVideo(upscaledVideo)

        console.log('- saving final video..')
        await keepVideo(enhancedVideo, process.env.WEBTV_VIDEO_STORAGE_PATH_NEXT)

        silentVideos.push(enhancedVideo)

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
