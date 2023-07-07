import { promises as fs } from "node:fs"
import path from "node:path"

import { client } from "@gradio/client"
import tmpDir from "temp-dir"

const spaceUrl = "https://jbilcke-hf-video-frame-interpolation.hf.space"

export const interpolateVideo = (fileName: string) {

  const filePath = path.join(tmpDir, fileName)
 
  const app = await client(spaceUrl)

  const video = await fs.readFile(filePath)
  
  const result = await app.predict(1, [
    video.toString('base64'), 	// blob in 'parameter_5' Video component		
    1, // number (numeric value between 1 and 4) in 'Interpolation Steps' Slider component		
    "24", // string  in 'FPS output' Radio component
  ])

  const data = (result as any).data

  console.log(data)

}
