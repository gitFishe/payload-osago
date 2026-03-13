import type { Block, Field } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const slideFields: Field[] = [
  {
    name: 'review',
    type: 'textarea',
  },
  {
    name:'ReviwersName',
    type:'text'
  },
  {
    name:'ReviewSource',
    type:"group",
    fields: [
      {
        name:'text',
        type:'text'
      },
      {
        name:'link',
        type:'text',
      }
    ]
  },
]

export const SwiperBlock: Block = {
  slug: 'swiperBlock',
  dbName: 'sw',
  labels: {
    singular: 'Social Swiper',
    plural: 'Social Swipers',
  },
  fields: [
    {
      name: 'blockTitle',
      type: 'text',
    },
    {
      name: 'blockDescription',
      type: 'text',
    },
    {
      name: 'tabs',
      label: 'Tabs',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Tab',
        plural: 'Tabs',
      },
      fields: [
        {
          name:'tabsSocialNetwork',
          type:'select',
          required:true,
          options: [
            {
              label: 'telegram',
              value: 'telegram',
            },
            {
              label: 'google',
              value: 'google',
            },
            {
              label: 'viber',
              value: 'viber',
            },
            {
              label: 'facebook',
              value: 'facebook',
            },
          ],
        },
        {
          name:'tabsIcon',
          type:'upload',
          relationTo:'media',
          required:true,
        },
        {
          name:'tabsTitle',
          type:'text',
          required: true,
        },
        {
          name:'tabsGrade',
          type:'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
            ],
          }),
        },
        {
          name:'slides',
          type: 'array',
          minRows: 1,
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: slideFields,
        },
      ],
    },
  ],
}
