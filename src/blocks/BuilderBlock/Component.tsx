import type React from 'react'

import type { Page } from '@/payload-types'

type BuilderBlockProps = Extract<Page['layout'][number], { blockType: 'builderBlock' }>

type Props = BuilderBlockProps & {
  id?: string
}

export const BuilderBlock: React.FC<Props> = ({ id, subtitle, stepsGroup }) => {
  return (
    <section id={id}>
      {subtitle ? <p>{subtitle}</p> : null}
      {stepsGroup?.length ? (
        <ul>
          {stepsGroup.map((step: { stepsBlock?: string | null }, index: number) => (
            <li key={index}>{step.stepsBlock}</li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
