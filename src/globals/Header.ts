import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [

    {
      type:'tabs',
      tabs: [
        {
          label:'mainHeader',
          fields:[
            {
              name: 'headerLogo',
              label: 'Header Logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name:'navItems',
              type:'array',
              maxRows:4,
              fields: [
                {name:'label', type:'text', required:true},
                {name:'href', type:'text', required:true},
              ]
            },
            {
              name:'button',
              type:'group',
              fields:[
                {
                  name:'buttonLabel',
                  type:'text',
                },
                {
                  name:'buttonLinks',
                  type:'array',
                  minRows:1,
                  fields: [
                    {name:'buttonLink', type:'text', required:true},
                    {name:'buttonLinkHref', type:'text', required:true},
                  ]
                }
              ]
            },
            {
              name:'SocialMedia',
              type:'array',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  options: ['telegram', 'instagram', 'facebook', 'youtube', 'tiktok'],
                },
                { name: 'href', type: 'text', required: true },
              ]
            },
            {
              name:'contactInfo',
              type:'group',
              fields:[
                {name: 'mobileNumber', type: 'text'},
                {
                  name:'workiungHours',
                  type:'group',
                  fields: [
                    {
                      name: 'openingTime',
                      type: 'date',
                      required:true,
                      admin: {
                        date: {
                          pickerAppearance: 'timeOnly',
                          displayFormat:'HH:mm',
                        }
                      }
                    },
                    {
                      name:'closingTime',
                      type:'date',
                      required:true,
                      admin: {
                        date: {
                          pickerAppearance: 'timeOnly',
                          displayFormat:'HH:mm',
                        }
                      }
                    }
                  ]
                },
              ]
            },
          ],
        },
        {
          label:'smallHeader',
          fields: [
            {
              name:'smallHeaderList',
              type:'array',
              maxRows:4,
              fields: [
                {name:'label', type:'text'},
              ]
            },
          ]
        }
      ]
    }
  ],
}
