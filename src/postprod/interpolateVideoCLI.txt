import { promises as fs } from "node:fs"
// import path from "node:path"
import { Blob } from "buffer"

import { client } from "@gradio/client"
// import tmpDir from "temp-dir"

const instances: string[] = [
  process.env.WEBTV_INTERPOLATION_SPACE_URL
]

export const interpolateVideo = async (filePath: string, outputFilePath: string) => {
  const instance = instances.shift()
  instances.push(instance)

  // const filePath = path.join(tmpDir, fileName)
  console.log('filePath: ', filePath)
  const app = await client(instance)
  console.log('app ready')
  const video = await fs.readFile(filePath)
  console.log('calling app.predict')

  const blob = new Blob([video], { type: 'video/mp4' })

  const result = await app.predict(1, [
    blob, 	// blob in 'parameter_5' Video component		
    1, // number (numeric value between 1 and 4) in 'Interpolation Steps' Slider component		
    24, // string  in 'FPS output' Radio component
  ])


  const data = (result as any).data[0]
  console.log('raw data:', data)
  const { orig_name, data: remoteFilePath } = data
  
  const remoteUrl = `${instance}/file=${remoteFilePath}`

  // download the video
  const response = await fetch(remoteUrl)

  // write it to the disk
  const arrayBuffer = await response.arrayBuffer()

  await fs.writeFile(
    outputFilePath,
    Buffer.from(arrayBuffer)
  )
}
