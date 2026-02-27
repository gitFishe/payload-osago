import type { Block, Field } from 'payload'

import { createSelectionItemFields } from './selectionItemFields'

type CreateSelectionArrayFieldArgs = {
  detailBlocks: Block[]
  maxRows?: number
}

type CreateSelectionGroupFieldArgs = {
  name: string
  detailBlocks: Block[]
  maxRows?: number
}

export const createSelectionArrayField = ({
  detailBlocks,
  maxRows = 3,
}: CreateSelectionArrayFieldArgs): Field => ({
  name: 'items',
  type: 'array',
  maxRows,
  admin: {
    initCollapsed: true,
  },
  fields: createSelectionItemFields(detailBlocks),
})

export const createSelectionGroupField = ({
  name,
  detailBlocks,
  maxRows,
}: CreateSelectionGroupFieldArgs): Field => ({
  name,
  type: 'group',
  fields: [createSelectionArrayField({ detailBlocks, maxRows })],
})
