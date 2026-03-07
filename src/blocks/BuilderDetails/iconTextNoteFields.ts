import type { Field } from 'payload'

export const iconTextNoteFields: Field[] = [
  {
    name: 'text',
    type: 'text',
    required: true,
  },
  {
    name: 'icon',
    type: 'upload',
    relationTo: 'media',
  },
  {
    name: 'hasNote',
    type: 'checkbox',
    defaultValue: false,
    label: 'Add footnote',
  },
  {
    name: 'note',
    type: 'textarea',
    admin: {
      condition: (_data, siblingData) => Boolean(siblingData?.hasNote),
    },
  },
]
