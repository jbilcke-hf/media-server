export interface Shot {
  shotId: string
  index: number
  lastGenerationAt: string
  videoPrompt: string
  audioPrompt: string
}

export interface Sequence {
  sequenceId: string
  skip: boolean
  lastGenerationAt: string
  videoPrompt: string
  audioPrompt: string
  channel: string
  tags: string[]
  shots: Shot[]
}

export interface Database {
  version: number
  startAtShotId: string
  sequences: Sequence[]
}