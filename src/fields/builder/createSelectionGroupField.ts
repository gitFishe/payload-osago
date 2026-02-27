import type { Block, Field } from 'payload'

import { createSelectionItemFields } from './selectionItemFields'

type CreateSelectionArrayFieldArgs = {
  detailBlocks: Block[]
  maxRows?: number
}

type CreateSelectionGroupFieldArgs = {
  name: string
  label: string
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
  label,
  detailBlocks,
  maxRows,
}: CreateSelectionGroupFieldArgs): Field => ({
  name,
  label,
  type: 'group',
  fields: [createSelectionArrayField({ detailBlocks, maxRows })],
})
