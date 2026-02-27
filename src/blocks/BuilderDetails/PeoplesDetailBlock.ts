import type { Block } from 'payload'

export const PeoplesDetailBlock: Block = {
  slug: 'builderPeoplesDetail',
  interfaceName: 'BuilderPeoplesDetail',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'minPeople',
      type: 'number',
      defaultValue: 1,
      min: 1,
      required: true,
    },
    {
      name: 'maxPeople',
      type: 'number',
      defaultValue: 10,
      min: 1,
      required: true,
    },
    {
      name: 'defaultPeople',
      type: 'number',
      defaultValue: 1,
      min: 1,
      required: true,
      validate: (
        value: unknown,
        {
          siblingData,
        }: {
          siblingData?: {
            minPeople?: number
            maxPeople?: number
          }
        },
      ) => {
        if (typeof value !== 'number') return true

        const minPeople =
          typeof siblingData?.minPeople === 'number' ? siblingData.minPeople : 1
        const maxPeople =
          typeof siblingData?.maxPeople === 'number' ? siblingData.maxPeople : 10

        if (value < minPeople || value > maxPeople) {
          return `Default value must be between ${minPeople} and ${maxPeople}.`
        }

        return true
      },
    },
  ],
}
