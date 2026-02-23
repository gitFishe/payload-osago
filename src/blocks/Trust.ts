import type { CollectionConfig } from 'payload'
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const Trust: CollectionConfig = {
    admin: {
        group: 'Content',
    },
    slug:'trustBlock',
    access: {
        read: () => true,
    },
    fields:[
        {
            name:'title',
            type:'text',
        },
        {
            name:'items',
            type:'array',
            minRows:1,
            fields: [
                {
                    name:'icon',
                    type:'upload',
                    required:true,
                    relationTo:'media'
                },
                {
                    name:'text',
                    label:'Box Text',
                    type:'richText',
                    required: true,
                    editor: lexicalEditor({
                        features: ({ defaultFeatures }) => [
                            ...defaultFeatures,
                        ],
                    }),
                },
            ]
        },
        {
            name:'guaranteeText',
            type:'richText',
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                ],
            }),
        }
    ]
}