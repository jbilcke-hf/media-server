import { promises as fs } from "node:fs"
import { client } from "@gradio/client"

// to test this file:
//  npm run postprod:interpolate sandbox/video/1688471841394.mp4

const spaceUrl = "https://jbilcke-hf-video-frame-interpolation.hf.space"
const filePath = process.argv[2]

console.log('filePath:', filePath)
const vid = await fs.readFile(filePath)
 
const b64 = vid.toString('base64')

console.log(b64.slice(0, 20))

const app = await client(spaceUrl)

/*
const result = await app.predict(1, [
	exampleVideo, 	// blob in 'parameter_5' Video component		
	1, // number (numeric value between 1 and 4) in 'Interpolation Steps' Slider component		
	"8", // string  in 'FPS output' Radio component
]);
console.log(result?.data)
*/
