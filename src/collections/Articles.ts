import type { CollectionConfig,  } from 'payload'
import {generateSlugHook} from "@/hooks/generateSlugHook";

export const Articles: CollectionConfig = {
    slug: 'articles',
    fields: [
        { name: 'title', type: 'text', required: true, unique: true },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            hooks: { beforeValidate: [generateSlugHook] },
        },
    ],
}
