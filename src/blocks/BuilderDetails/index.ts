import type { Block } from 'payload'

import { CountryDetailBlock } from './CountryDetailBlock'
import { DaysDetailBlock } from './DaysDetailBlock'
import { IconTextNoteDetailBlock } from './IconTextNoteDetailBlock'
import { InputDetailBlock } from './InputDetailBlock'
import { PeoplesDetailBlock } from './PeoplesDetailBlock'

export {
  CountryDetailBlock,
  DaysDetailBlock,
  IconTextNoteDetailBlock,
  InputDetailBlock,
  PeoplesDetailBlock,
}

export const defaultSelectionDetailBlocks: Block[] = [
  IconTextNoteDetailBlock,
  CountryDetailBlock,
  DaysDetailBlock,
  PeoplesDetailBlock,
  InputDetailBlock,
]
