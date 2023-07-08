import path from 'node:path'
import fs from 'node:fs'

import tmpDir from 'temp-dir'
import puppeteer from 'puppeteer'
import { downloadVideo } from './downloadVideo.mts'

// TODO we should use an inference endpoint instead
export async function interpolateVideo(fileName: string) {
  
  const browser = await puppeteer.launch({
    // headless: true,
    protocolTimeout: 300000,
  })

  const spaceUrl = process.env.WEBTV_INTERPOLATION_SPACE_URL

  const page = await browser.newPage()

  await page.goto(spaceUrl, {
    waitUntil: 'networkidle2',
  })

  const inputFilePath = path.join(tmpDir, fileName)
  // console.log(`local file to upscale: ${inputFilePath}`)
  
  await new Promise(r => setTimeout(r, 3000))

  const fileField = await page.$('input[type=file]')

  // console.log(`uploading file..`)
  await fileField.uploadFile(inputFilePath)

  // console.log('looking for the button to submit')
  const submitButton = await page.$('button.lg')

  // console.log('clicking on the button')
  await submitButton.click()


  await page.waitForSelector('a[download="interpolated_result.mp4"]', {
    timeout: 300000, // need to be large enough in case someone else attemps to use our space
  })

  const interpolatedFileUrl = await page.$$eval('a[download="interpolated_result.mp4"]', el => el.map(x => x.getAttribute("href"))[0])

  const tmpFileName = `${fileName}_xl`

  // console.log('downloading file from space..')
  console.log(`- downloading ${fileName} from ${interpolatedFileUrl}`)

  await downloadVideo(interpolatedFileUrl, tmpFileName)

  const tmpFilePath = path.join(tmpDir, tmpFileName)
  const filePath = path.join(tmpDir, fileName)

  await fs.promises.copyFile(tmpFilePath, filePath)
  try {
    await fs.promises.unlink(tmpFilePath)
  } catch (err) {
    console.log('failed to cleanup (no big deal..)')
  }

  return fileName
}
