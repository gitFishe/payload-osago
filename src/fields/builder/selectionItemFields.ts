import type { Block, Field } from 'payload'

export const createSelectionItemFields = (detailBlocks: Block[]): Field[] => [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'hasSummary',
    type: 'checkbox',
    label: 'Add summary',
    defaultValue: false,
  },
  {
    type: 'collapsible',
    label: 'Summary',
    admin: {
      initCollapsed: true,
      condition: (_data, siblingData) => Boolean(siblingData?.hasSummary),
    },
    fields: [
      {
        name: 'summary',
        type: 'group',
        admin: {
          hideGutter: true,
        },
        fields: [
          {
            name: 'text',
            type: 'textarea',
          },
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
          },
        ],
      },
    ],
  },
  {
    name: 'details',
    type: 'blocks',
    minRows: 1,
    admin: {
      initCollapsed: true,
    },
    blocks: detailBlocks,
  },
]
