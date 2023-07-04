import path from 'node:path'
import fs from 'node:fs'

import tmpDir from 'temp-dir'
import ffmpeg from 'fluent-ffmpeg'

export const enhanceVideo = async (fileName: string): Promise<string> => {
  return new Promise((resolve,reject) => {

    const tmpFileName = `enhanced_${fileName}.mp4`

    const filePath = path.join(tmpDir, fileName)
    const tmpFilePath = path.join(tmpDir, tmpFileName)

    ffmpeg(filePath)

      // the basic interpolation create weird fade effects
      // .videoFilters('minterpolate=fps=12:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1')

      // we should already be upscaled at this point
      // .size('1024x576')

      .videoFilters('noise=c0s=10:c0f=t+u')
      .save(tmpFilePath)
      .on('end', async () => {
        await fs.promises.copyFile(tmpFilePath, filePath)
        try {
          await fs.promises.unlink(tmpFilePath)
        } catch (err) {
          console.log('failed to cleanup (no big deal..)')
        }

        resolve(fileName)
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}