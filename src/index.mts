import { generateVideo } from './generateVideo.mts'
import { downloadVideo } from './downloadVideo.mts'

import { demo1 } from './prompts.mts'
import { getStats } from './getStats.mts'

const main = async () => {
  console.log('Generating ideas..')
  const ideas = demo1

  console.log('Generating videos..')

  for (const { input, captions } of ideas) {
    console.log(`\nVideo to generate: ${input}`)

    for (const caption of captions) {
      console.log(`- generating: ${caption}`)
      try {
        const { url } = await generateVideo(caption)
        console.log(`- downloading: ${url}`)
        const downloaded = await downloadVideo(url)
        console.log('- done')
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
