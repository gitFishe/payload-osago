import type React from 'react'
import type {Media, Page} from '@/payload-types'
import {RichText} from "@/components/RichText";
import {SerializedEditorState} from "lexical";
import BlockTypes from "@/blocks/BuilderBlock/BlocksTypes";
import CheckButtonsButton from "@/blocks/BuilderBlock/CheckButtonsButton";

type CommonBlock<T extends string> = {
    "blockType": T,
    "id": string
    "blockName"?: string | null,
}
type IconTextBlockProps = CommonBlock<'iconText'> & {
    "text": string
    "icon"?: Media | null
    "hasNote"?: boolean
    "note"?: object | null
}
type InputBlockProps = CommonBlock<'input'> & {
    "placeholder"?: string | null,
}
type PeoplesBlockProps = CommonBlock<'peoples'> & {
    'text': string
    "minPeople": number
    "maxPeople": number
    'defaultPeople': number
}
type DaysBlockProps = CommonBlock<'days'> & {
    'text': string
    'icon'?: string | null
}

type SelectionDetails =
    | IconTextBlockProps
    | InputBlockProps
    | PeoplesBlockProps
    | DaysBlockProps

type BuilderBlockProps = {
    title: SerializedEditorState
    subtitle:string
    image:{
        alt?: string | null
        url: string
    },
    stepsGroup:Array<{
        stepsBlock:string
    }>,
    selectionGroup:Array<{
        title: string | null
        hasSummary: boolean
        summary: {
            text:string
            image: Media | string | null
        }
        details: SelectionDetails[]
    }>,
}




export const BuilderBlock = (props:BuilderBlockProps) => {
    const {
        title,
        subtitle,
        image,
        stepsGroup,
        selectionGroup
    } = props

    // console.log(props,'props')
    //
    // const firstDetails = props.selectionGroup?.[0];
    //
    // console.log('firstDetails:', firstDetails?.summary)
    // console.log('block types:', firstDetails?.map((b) => b.blockType))
    // console.log('details json:', JSON.stringify(firstDetails, null, 2))

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
                        {stepsGroup.map((step, i) => (
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
                    <iframe className='scale-80 w-full h-[190px] mr-auto' src="https://store.steampowered.com/widget/3764200/"></iframe>
                </div>
                <div className='mt-auto'>
                    <img src={image.url}/>
                </div>
            </div>
            <div className='w-full rounded-[20px] overflow-hidden border-[#f0f1f3] border'>
                <div className='py-7.5
                    [&>*:not(:last-child)]:mb-6.5
                    relative
                    before:absolute
                    before:left-0
                    before:top-0
                    before:w-66
                    before:h-full
                    before:bg-customLightBlue
                    before:border-[#f0f1f3]
                    before:border-r


                    [&>*:not(:last-child)>:first-child]:before:absolute
                    [&>*:not(:last-child)>:first-child]:before:left-0
                    [&>*:not(:last-child)>:first-child]:before:-bottom-3.25
                    [&>*:not(:last-child)>:first-child]:before:w-full
                    [&>*:not(:last-child)>:first-child]:before:h-px
                    [&>*:not(:last-child)>:first-child]:before:bg-[#d0daff]



                    [&>*:not(:last-child)>:last-child]:after:absolute
                    [&>*:not(:last-child)>:last-child]:after:left-0
                    [&>*:not(:last-child)>:last-child]:after:-bottom-3.25
                    [&>*:not(:last-child)>:last-child]:after:w-full
                    [&>*:not(:last-child)>:last-child]:after:h-px
                    [&>*:not(:last-child)>:last-child]:after:bg-[#f0f1f3]

                '>
                    {selectionGroup?.map((item, i) => (
                        <div className='flex items-center px-7.5'>
                            <div className='w-58.5 shrink-0 flex items-center h-14 relative'>
                                <div className='bg-customOrange rounded-full mr-2.5 text-white font-bold text-[16px] leading-5.5 w-5 h-5 text-center'>
                                    <span>{++i}</span>
                                </div>
                                <span className='text-[20px] font-bold' key={i}>{item.title}</span>
                                {item.hasSummary ? (
                                    <div className='relative'>
                                        <div className='relative peer bg-customBlue ml-1.25 rounded-full w-5 h-5 block text-white text-center cursor-pointer'>
                                            <span>?</span>
                                        </div>
                                        <div className='absolute peer-hover:block hidden rounded-[6px] w-85 top-9 -left-2.25 bg-customBlueDark z-20 p-4'>
                                            <p className='text-white'>{item.summary.text}</p>
                                            {item.summary.image ? (
                                                <div className='w-77.5 h-50 mt-3.5'><img src={item.summary.image.url}/></div>
                                            ) : ' '}
                                            <div className='absolute left-4 -translate-y-full top-0 w-4 h-2.5 border-x-8 border-x-transparent border-b-10 border-b-customBlueDark'/>
                                        </div>
                                    </div>
                                ) : ''}
                            </div>
                            <div className='flex w-full pl-7.5 relative [&>*:not(:last-child)]:mr-3.5 ButtonRows'>
                                {item.details.map((block) => (
                                    <BlockTypes key={block.id} block={block}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='py-5 px-8 w-full'>
                    <CheckButtonsButton
                        className='ml-auto bg-customBlue rounded-[40px] flex items-center cursor-pointer text-white text-[18px] px-7.5 py-2.25'
                        label='Далее'
                    />
                </div>
            </div>
        </div>
   </section>
  )
}


