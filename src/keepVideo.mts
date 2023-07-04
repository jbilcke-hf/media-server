import path from 'node:path'
import fs from 'node:fs'

import tmpDir from 'temp-dir'

export const keepVideo = async (fileName: string): Promise<string> => {
  const sourceFilePath = path.join(tmpDir, fileName)
  const targetFilePath = path.join(process.env.WEBTV_VIDEO_STORAGE_PATH_NEXT, fileName)

  await fs.promises.rename(sourceFilePath, targetFilePath)

  return targetFilePath
}