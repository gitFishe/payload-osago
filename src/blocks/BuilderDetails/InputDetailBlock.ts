import type { Block } from 'payload'

export const InputDetailBlock: Block = {
  slug: 'builderInputDetail',
  interfaceName: 'BuilderInputDetail',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'placeholder',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'text',
      options: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Number',
          value: 'number',
        },
      ],
    },
    {
      name: 'required',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'min',
      type: 'number',
      admin: {
        condition: (_data, siblingData) => siblingData?.type === 'number',
      },
    },
    {
      name: 'max',
      type: 'number',
      admin: {
        condition: (_data, siblingData) => siblingData?.type === 'number',
      },
    },
  ],
}
