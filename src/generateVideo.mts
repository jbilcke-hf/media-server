import { callZeroscope } from './callZeroscope.mts'
import { downloadVideo } from './downloadVideo.mts'

export const generateVideo = async (prompt: string): Promise<string> => {
  const { url } = await callZeroscope(prompt)

  const rawVideo = await downloadVideo(url)

  return rawVideo
}
