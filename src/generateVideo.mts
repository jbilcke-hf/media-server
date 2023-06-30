import { client } from '@gradio/client'

import { getRandomInt } from "./generateSeed.mts"

const videoSpaceApiUrl = process.env.WEBTV_VIDEO_SPACE_API_URL
const videoSpaceDownloadUrl = process.env.WEBTV_VIDEO_SPACE_API_URL

export const generateVideo = async (prompt: string, options?: {
  seed: number;
  nbFrames: number;
  nbSteps: number;
}) => {
  const seed = options?.seed || getRandomInt()
  const nbFrames = options?.nbFrames || 24
  const nbSteps = options?.nbSteps || 10

  const api = await client(videoSpaceApiUrl)

  const rawResponse = await api.predict('/run', [		
    prompt, // string  in 'Prompt' Textbox component		
    seed, // number (numeric value between 0 and 2147483647) in 'Seed' Slider component		
    nbFrames, // 24 // it is the nb of frames per seconds I think?
    nbSteps, // 10, (numeric value between 10 and 50) in 'Number of inference steps' Slider component
  ]) as any
  
  const { name, orig_name } = rawResponse?.data?.[0]?.[0] as { name: string, orig_name: string }

  return {
    url: `${videoSpaceApiUrl}/file=${name}`,
    name: orig_name
  }
}
