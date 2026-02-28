import type React from 'react'
import type { Page } from '@/payload-types'
import {RichText} from "@/components/RichText";
import {SerializedEditorState} from "lexical";

type BuilderBlockProps = {
  title: SerializedEditorState,
  subtitle:string,
  image:{
    alt?: string | null,
    url: string,
  },
  stepsGroup:Array<{
    stepsBlock:string,
  }>,
}
export const BuilderBlock = ({
    title,
    subtitle,
    image,
    stepsGroup,
                             }:BuilderBlockProps) => {


  return (
   <section className='bg-white text-customText pt-[48px]'>
        <div className='container'>
            <div className='flex'>
                <div className='mr-7'>
                    <div>
                        <RichText className='mb-4 text-5xl font-bold' data={title}/>
                    </div>
                    <p className='text-xl mb-4'>{subtitle}</p>
                    <div className='flex

                        pl-3.5
                        mb-35.75
                        [&>*:not(:last-child)]:mr-15.75
                        [&>*:not(:last-child)]:before:absolute
                        [&>*:not(:last-child)]:before:-right-3.5
                        [&>*:not(:last-child)]:before:top-1/2
                        [&>*:not(:last-child)]:before:bottom-1/2
                        [&>*:not(:last-child)]:before:w-6
                        [&>*:not(:last-child)]:before:h-6
                        [&>*:not(:last-child)]:before:bg-[url(/icons/builder-arrow.svg)]
                        [&>*:not(:last-child)]:before:bg-no-repeat
                        [&>*:not(:last-child)]:before:bg-center
                        [&>*:not(:last-child)]:before:bg-contain
                        [&>*:not(:last-child)]:before:-translate-x-[-100%]
                        [&>*:not(:last-child)]:before:-translate-y-1/2
                    '>
                        {stepsGroup.map((step,i) => (
                            <div key={i} className='bg-[#f8f9fb] flex items-center relative h-14 px-6 rounded-xl'>
                                <span
                                    aria-hidden
                                    className="
                                    absolute left-[-2px] bottom-0 h-full w-auto
                                    text-[87px]
                                    [-webkit-text-stroke:6px_#fff]
                                    text-transparent
                                    -translate-x-1/2
                                    pointer-events-none
                                    leading-[58px]
                                    font-ropasans
                                  ">
                                  {++i}
                                </span>
                                <span
                                    className="
                                    absolute left-[-2px] bottom-0 h-full w-auto
                                    text-[87px]
                                    text-[#AEBCD1]
                                    -translate-x-1/2
                                    leading-[58px]
                                    font-ropasans
                                  ">
                                  {i}
                                </span>
                                <span className='text-sm'>{step.stepsBlock}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-auto'>
                    <img src={image.url}/>
                </div>
            </div>
        </div>
   </section>
  )
}
