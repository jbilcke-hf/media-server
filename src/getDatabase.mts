import { promises as fs } from 'node:fs'

import { Database } from './types.mts'

export const getDatabase = async (filePath: string): Promise<Database> => {
  const rawFile = await fs.readFile(filePath, 'utf8')
  
  return JSON.parse(rawFile) as Database
}