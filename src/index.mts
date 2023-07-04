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

    for (const caption of captions) {
      console.log(`- generating video.. prompt: ${caption}`)
      try {
        const rawVideo = await generateVideo(caption)

        console.log(`- downloaded ${rawVideo}`)

        console.log('- upscaling video..')
        const upscaledVideo = await upscaleVideo(rawVideo, caption)

        console.log('- enhancing video..')
        const enhancedVideo = await enhanceVideo(upscaledVideo)

        console.log('- saving final video..')
        await keepVideo(enhancedVideo)

        console.log('- done!')
      } catch (err) {
        console.log(`- error: ${err}`)
      }
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
