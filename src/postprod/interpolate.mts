import { interpolateVideo } from "./interpolateVideoCLI.mts"

// to test this file:
//  npm run postprod:interpolate sandbox/video/raccoon.mp4 sandbox/video/output.mp4

const inputFilePath = process.argv[2]
const outputFilePath = process.argv[3]

console.log('input file path:', inputFilePath)
console.log('output file path:', outputFilePath)

await interpolateVideo(inputFilePath, outputFilePath)