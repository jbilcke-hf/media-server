import fs from "fs"
import path from "path"

import { Database } from "../types.mts"

export const updatePlaylists = async (db: Database) => {
  // TODO we should DROP THE CHANNEL 3 name,
  // and only keep WEBTV_VIDEO_STORAGE_PATH
  const directoryPath = process.env.WEBTV_VIDEO_STORAGE_PATH_CHANNEL_3

  // Record of file paths categorized by tags
  const categoryToFilePaths: Record<string, string[]> = {}

  // Read JSON sequences
  for (const sequence of db.sequences) {
    // Read sequence tags and create empty category list if not already present
    for (const tag of sequence.tags) {
      if (!categoryToFilePaths[tag]) {
        categoryToFilePaths[tag] = []
      }
    }

    // Read files from the sequence
    for (const shot of sequence.shots) {
      const shotId = shot.shotId;
      const mp4FileName = `${shotId}.mp4`
      const shotFilePath = path.join(directoryPath, mp4FileName)

      // Check if file exists
      if (fs.existsSync(shotFilePath)) {
        // Add the file path to the categories
        for (const tag of sequence.tags) {
          categoryToFilePaths[tag].push(shotFilePath)
        }
      }
    }
  }

  // Print the stats
  for (const [category, filePaths] of Object.entries(categoryToFilePaths)) {
    console.log(
      `Category: ${category}; Number of Files: ${filePaths.length}; Files: ${filePaths.join(
        ", "
      )}`
    )
  }

  // create the new playlists
  for (const [category, filePaths] of Object.entries(categoryToFilePaths)) {
    if (filePaths.length > 0) {
      console.log(`creating playlist for ${category}..`)

      let data = 'ffconcat version 1.0\n'
      filePaths.forEach((filePath) => {
        data += `file '${filePath}'\n`
      })

      // write file data synchronously
      fs.writeFileSync(`channel_${category}.txt`, data)
      console.log(`Created playlist channel_${category}.txt`)
    }
  }

  // Get all the file paths in the directory
  const allFiles = await fs.promises.readdir(directoryPath)
  const allFilePaths = allFiles
    .map(file => path.join(directoryPath, file))
    .filter(filePath => filePath.endsWith('.mp4'))

  // Create channel_random.txt with all files
  let randomData = 'ffconcat version 1.0\n'
  allFilePaths.forEach(filePath => {
    randomData += `file '${filePath}'\n`
  })
  await fs.promises.writeFile("channel_random.txt", randomData)
  console.log("Created playlist channel_random.txt")

  // Filter the list for the last 400 updated files
  const lastUpdatedFilePaths = allFilePaths
    .map(filePath => ({
      filePath,
      mtime: fs.statSync(filePath).mtime
    }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime())
    .slice(0, 400)
    .map(file => file.filePath)

  // Create channel_fresh.txt
  let freshData = 'ffconcat version 1.0\n'
  lastUpdatedFilePaths.forEach(filePath => {
    freshData += `file '${filePath}'\n`
  })
  await fs.promises.writeFile("channel_fresh.txt", freshData)
  console.log("Created playlist channel_fresh.txt")
}