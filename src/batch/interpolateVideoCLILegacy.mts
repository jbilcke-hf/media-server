import fs from 'node:fs'

import puppeteer from 'puppeteer'

// TODO we should use an inference endpoint instead
export async function interpolateVideo(inputFilePath: string, outputFilePath: string) {
  
  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 400000,
  })

  const spaceUrl = process.env.WEBTV_INTERPOLATION_SPACE_URL

  const page = await browser.newPage()
  await page.goto(spaceUrl, { waitUntil: 'networkidle2' })
  
  await new Promise(r => setTimeout(r, 3000))

  const fileField = await page.$('input[type=file]')

  // console.log(`uploading file..`)
  await fileField.uploadFile(inputFilePath)

  // console.log('looking for the button to submit')
  const submitButton = await page.$('button.lg')

  // console.log('clicking on the button')
  await submitButton.click()

  await page.waitForSelector('a[download="interpolated_result.mp4"]', {
    timeout: 400000, // need to be large enough in case someone else attemps to use our space
  })

  const interpolatedFileUrl = await page.$$eval('a[download="interpolated_result.mp4"]', el => el.map(x => x.getAttribute("href"))[0])

  // console.log('downloading file from space..')
  console.log(`- downloading from ${interpolatedFileUrl}`)


  // download the video
  const response = await fetch(interpolatedFileUrl)
  // write it to the disk
  const arrayBuffer = await response.arrayBuffer()
  
  await fs.promises.writeFile(
    outputFilePath,
    Buffer.from(arrayBuffer)
  )
  console.log('success! wrote to:', outputFilePath)

  process.exit()
}