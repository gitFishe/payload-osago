import type {Block} from 'payload';
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const PromoHero: Block = {
    slug: 'promoHero',
    labels: {
        singular: 'Promo Hero',
        plural: 'Promo Heroes',
    },
    fields: [
        {
            name:'heading',
            label:'Heading',
            type:'richText',
            required: true,
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                ],
            }),
        },
        {
            name: 'text',
            label: 'Текст',
            type: 'text',
        },

        {
            type: 'row',
            fields: [
                {
                    name: 'pricePrefix',
                    label: '',
                    type: 'text',
                    defaultValue: 'від',
                    admin: {
                        readOnly: true,
                        width: '15%',
                    },
                },
                {
                    name: 'minPrice',
                    label: '',
                    type: 'number',
                    required: true,
                    min: 0,
                    admin: {
                        width: '55%',
                        step: 1,
                        placeholder: '500',
                    },
                },
                {
                    name: 'priceSuffix',
                    label: '',
                    type: 'text',
                    defaultValue: '₴',
                    admin: {
                        readOnly: true,
                        width: '15%',
                    },
                },
            ],
        },


        {
            name: 'backgroundImageUrl',
            label: 'URL фонового зображення',
            type: 'upload',
            relationTo: 'media',
        },

        {
            name: 'button',
            label: 'Кнопка',
            type: 'group',
            fields: [
                {
                    name: 'label',
                    label: 'Текст кнопки',
                    type: 'text',
                    required: true,
                    defaultValue: 'Переглянути',
                },
                {
                    name: 'href',
                    label: 'Посилання кнопки',
                    type: 'text',
                    required: true,
                    defaultValue: '/offers',
                },
            ],
        }
    ]
}