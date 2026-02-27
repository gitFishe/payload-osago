import type { Block } from 'payload'

import { iconTextNoteFields } from './iconTextNoteFields'

export const CountryDetailBlock: Block = {
  slug: 'builderCountryDetail',
  interfaceName: 'BuilderCountryDetail',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443',
    },
    {
      name: 'options',
      type: 'array',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: iconTextNoteFields,
    },
  ],
}
