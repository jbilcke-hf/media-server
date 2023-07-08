import { promises as fs } from 'node:fs'

export const getStats = async () => {
  let nbVideos1 = 0
  let nbVideos2 = 0
  let nbVideos3 = 0
  let nbVideos4 = 0

  try {
    const video1 = await fs.readdir(process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_1)
    nbVideos1 = video1.length
  } catch (err) {}

  try {
    const video2 = await fs.readdir(process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_2)
    nbVideos2 = video2.length
  } catch (err) {}

  try {
    const video3 = await fs.readdir(process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3)
    nbVideos3 = video3.length
  } catch (err) {}

  try {
    const video4 = await fs.readdir(process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_4)
    nbVideos4 = video4.length
  } catch (err) {}

  return {
     nbVideos1,
     nbVideos2,
     nbVideos3,
     nbVideos4,
  
  }
}