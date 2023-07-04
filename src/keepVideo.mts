import path from 'node:path'
import fs from 'node:fs'

import tmpDir from 'temp-dir'

export const keepVideo = async (fileName: string, targetDirPath: string): Promise<string> => {
  const sourceFilePath = path.join(tmpDir, fileName)
  const targetFilePath = path.join(targetDirPath, fileName)

  await fs.promises.copyFile(sourceFilePath, targetFilePath)
  try {
    await fs.promises.unlink(sourceFilePath)
  } catch (err) {
    console.log('failed to cleanup (no big deal..)')
  }

  return targetFilePath
}