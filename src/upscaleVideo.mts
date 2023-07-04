import path from 'node:path'
import fs from 'node:fs'

import tmpDir from 'temp-dir'
import puppeteer from 'puppeteer'
import { downloadVideo } from './downloadVideo.mts'

// TODO we should use an inference endpoint instead (or a space which bakes generation + upscale at the same time)
export async function upscaleVideo(fileName: string, prompt: string) {
  
  const browser = await puppeteer.launch({
    // headless: true,
  })

  const spaceUrl = `https://jbilcke-hf-zeroscope-xl.hf.space`

  const page = await browser.newPage()

  await page.goto(spaceUrl, {
    waitUntil: 'networkidle2',
  })

  const promptField = await page.$('textarea')
  await promptField.type(prompt)

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

  /*
  const client = await page.target().createCDPSession()

  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: tmpDir,
  })
  */

  await page.waitForSelector('a[download="xl_result.mp4"]', {
    timeout: 800000, // need to be larg eenough in case someone else attemps to use our space
  })

  const upscaledFileUrl = await page.$$eval('a[download="xl_result.mp4"]', el => el.map(x => x.getAttribute("href"))[0])

  // console.log('downloading upscaled image from:', upscaledFileUrl)

  const tmpFileName = `${fileName}_xl`

  // console.log('downloading file from space..')
  await downloadVideo(upscaledFileUrl, { fileName: tmpFileName })

  const tmpFilePath = path.join(tmpDir, tmpFileName)
  const filePath = path.join(tmpDir, fileName)

  await fs.promises.rename(tmpFilePath, filePath)

  return fileName
}
