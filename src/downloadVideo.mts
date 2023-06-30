import path from 'node:path'
// import { promises as fs } from 'fs'
import fs from 'node:fs'

export const downloadVideo = async (remoteUrl: string, options?: { localPath: string; localFileName: string; }): Promise<string> => {

  const localPath = options?.localPath || process.env.WEBTV_VIDEO_STORAGE_PATH
  const localFileName = `${options?.localFileName || Date.now()}.mp4`

  // download the video
  const response = await fetch(remoteUrl)

  // write it to the disk
  const arrayBuffer = await response.arrayBuffer()

  const finalPath = path.resolve(localPath, localFileName)

  await fs.createWriteStream(
    finalPath
  ).write(Buffer.from(arrayBuffer))

  return finalPath
}