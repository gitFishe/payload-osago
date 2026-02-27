import type { Block } from 'payload'

export const DaysDetailBlock: Block = {
  slug: 'builderDaysDetail',
  interfaceName: 'BuilderDaysDetail',
  fields: [
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
      name: 'startPlaceholder',
      type: 'text',
      defaultValue: '\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430',
    },
    {
      name: 'endPlaceholder',
      type: 'text',
      defaultValue: '\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F',
    },
    {
      name: 'disablePastStartDate',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'preventEndBeforeStart',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
