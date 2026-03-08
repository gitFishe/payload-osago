import {Block} from "payload";
import {Media} from "@/components/Media";
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const PolicyInstructionBlock:Block = {
    slug:'policyInstructionBlock',
    dbName: 'pi',
    fields: [
        {
            name:'order',
            type:'group',
            fields: [
                {
                    name:'title',
                    type:'richText',
                    editor: lexicalEditor({
                        features: ({ defaultFeatures }) => [
                            ...defaultFeatures,
                        ],
                    }),
                },
                {
                    name:'messengers',
                    type:'group',
                    fields: [
                        {
                            name:'title',
                            type:'richText',
                            editor: lexicalEditor({
                                features: ({ defaultFeatures }) => [
                                    ...defaultFeatures,
                                ],
                            }),
                        },
                        {
                            name:'description',
                            type:"text",
                        },
                        {
                            name:'links',
                            type:'array',
                            maxRows:4,
                            fields: [
                                {
                                    name:'socialLinkIcon',
                                    type:'select',
                                    options: [
                                        {
                                            label: 'viber',
                                            value: 'viber',
                                        },
                                        {
                                            label: 'telegram',
                                            value: 'telegram',
                                        },
                                    ],
                                },
                                {
                                    name:'socialLinkName',
                                    type:'text',
                                },
                                {
                                    name:'linkToMedia',
                                    type:'text',
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'solo',
                    type:'group',
                    fields: [
                        {
                            name:'title',
                            type:'richText',
                            editor: lexicalEditor({
                                features: ({ defaultFeatures }) => [
                                    ...defaultFeatures,
                                ],
                            }),
                        },
                        {
                            name:'description',
                            type:'text',
                        },
                        {
                            type:'row',
                            fields: [
                                {
                                    name:'buttonText',
                                    type:'text',
                                },
                                {
                                    name:'buttonLink',
                                    type:'text',
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name:'instruction',
            type:'group',
            fields: [
                {
                    name:'title',
                    type:'text',
                },
                {
                    name:'steps',
                    type:'array',
                    fields: [
                        {
                            name:'text',
                            type:'text',
                        }
                    ]
                },
                {
                    name:'blockLinksGroup',
                    type:'array',
                    maxRows:2,
                    fields: [
                        {
                            name:'text',
                            type:'richText',
                            editor: lexicalEditor({
                                features: ({ defaultFeatures }) => [
                                    ...defaultFeatures,
                                ],
                            }),
                        },
                        {
                            name:'img',
                            type:'upload',
                            relationTo:'media',
                        }
                    ]
                }
            ]
        }
    ]
}
