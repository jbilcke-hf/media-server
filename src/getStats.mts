import { promises as fs } from 'node:fs'

export const getStats = async () => {
  const videoFilePaths = await fs.readdir(process.env.WEBTV_VIDEO_STORAGE_PATH_NEXT)
  const legacyVideoFilePaths = await fs.readdir(process.env.WEBTV_VIDEO_STORAGE_PATH)
  const legacyAudioFilePaths = await fs.readdir(process.env.WEBTV_AUDIO_STORAGE_PATH)

  return {
    nbVideoFiles: videoFilePaths.length,
    nbLegacyVideoFiles: legacyVideoFilePaths.length,
    nbLegacyAudioFiles: legacyAudioFilePaths.length,
  }
}