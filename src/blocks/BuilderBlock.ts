import type { Block } from 'payload'

import {
  greenCardDetailBlocks,
  kaskoDetailBlocks,
  osagoDetailBlocks,
} from '@/blocks/BuilderDetails'
import { createSelectionGroupField } from '@/fields/builder/createSelectionGroupField'

export const BuilderBlock: Block = {
  slug: 'builderBlock',
  dbName: 'b',
  fields: [
    {
      name: 'title',
      type: 'richText',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'stepsGroup',
      label:'Add Steps Group',
      type: 'array',
      fields: [
        {
          name: 'stepsBlock',
          label:'Step Text',
          type: 'text',
        },
      ],
    },
    {
      name: 'image',
      label:'Big Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'selectionGroup',
      type: 'group',
      fields: [
        createSelectionGroupField({
          name: 'selectionGroupOsago',
          label: 'OSAGO',
          detailBlocks: osagoDetailBlocks,
        }),
        createSelectionGroupField({
          name: 'selectionGroupKasko',
          label: 'KASKO',
          detailBlocks: kaskoDetailBlocks,
        }),
        createSelectionGroupField({
          name: 'selectionGroupGreenCard',
          label: 'Green Card',
          detailBlocks: greenCardDetailBlocks,
        }),
      ],
    },
  ],
}
