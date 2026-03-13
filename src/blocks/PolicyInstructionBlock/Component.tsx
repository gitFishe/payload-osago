import { RichText } from "@/components/RichText";
import {Media} from "@/payload-types";
import {SerializedEditorState} from "lexical";
import {MediaButtons} from "@/blocks/PolicyInstructionBlock/MediaButtons";
import CustomButton from "@/components/CustomButton/CustomButton";


interface BlockLink {
    id:string,
    img?:Media,
    text:SerializedEditorState,
    link:string,
}

interface Messengers {
    title:SerializedEditorState,
    description:string,
    links: {
        id?: string,
        linkToMedia: string,
        socialLinkIcon: string,
        socialLinkName: string,
    }
}
export type MessengersProps = Messengers['links']

interface Solo {
    buttonLink?:string,
    buttonText?:string,
    description?:string,
    title: SerializedEditorState,
}

type PolicyInstructionProps = {
    id:string,
    instruction:{
        blockLinksGroup:BlockLink[],
        steps:Array<{
            text:string,
        }>,
        title?:string,
    },
    order:{
        title:SerializedEditorState,
        messengers:Messengers,
        solo:Solo,
    }
}

export const PolicyInstructionBlock = ({
    id,
    instruction,
    order,
                                       }:PolicyInstructionProps) => {

    console.log(order.messengers, 'props.instruction')

    return(
        <section className='text-customText bg-white py-25'>
            <div className='container'>
                <div className='flex justify-between'>
                    <div className='border border-[#F0F1F3] rounded-[15px] py-10 px-7.5 mr-4'>
                        <h4 className='text-xl font-bold mb-5'>
                            {instruction.title}
                        </h4>



                        <div className=' [&>*:not(:last-child)]:mb-4 mb-9'>
                            {instruction.steps.map((elem, i) => (
                                <div className='flex items-center'>
                                    <div className='mr-2.5 bg-customOrange rounded-full w-5 h-5 text-center font-bold text-[15px] text-white'>
                                        <span>
                                            {++i}
                                        </span>
                                    </div>
                                    <span className='leading-5'>
                                        {elem.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className='[&>*:not(:last-child)]:mb-3.75'>
                            {instruction.blockLinksGroup.map((elem, i) => {
                                return (
                                    <a href={elem.link} className='flex cursor-pointer items-center py-5 bg-[#F8F9FB] rounded-[20px] px-6.75'>
                                        <div className='w-29 h-17.5 bg-[#E6EBFF] rounded-[10px] border border-[#C3CFFF] flex items-center justify-center mr-5.75'>
                                            <img src={elem.img?.url || undefined}/>
                                        </div>
                                        <div>
                                            <RichText data={elem.text} className='font-bold [&_strong]:text-customBlue [&_strong]:font-bold'/>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>



                    <div className='w-139.5 '>
                        <RichText className='[&_span]:text-customBlue mb-12 text-[38px] leading-9 font-bold' data={order.title}/>
                        <div className='pb-7.5'>
                            <RichText className='[&_strong]:text-customBlue [&_strong]:font-bold font-bold mb-4 text-[28px] leading-8' data={order.messengers.title}/>
                            <p className='text-[#748DB1] mb-6.25'>{order.messengers.description}</p>
                            <div className='[&>*:not(:last-child)]:mr-4 flex'>
                                {order.messengers.links.map((item: Messengers["links"]) => (
                                    <MediaButtons
                                        key={item.id}
                                        {...item}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='relative w-full text-center
                            before:absolute
                            before:top-1/2
                            before:w-full
                            before:bg-[#EBEEF3]
                            before:h-px
                            before:left-0'>
                            <span className='px-6 bg-white text-[#748DB1] text-[18px] leading-6 relative'>или</span>
                        </div>
                        <div className='pt-7.5'>
                            <RichText className='[&_strong]:text-customBlue [&_strong]:font-bold text-[28px] font-bold leading-8 mb-3.75' data={order.solo.title}/>
                            <p className='text-[#748DB1] mb-6.25'>{order.solo.description}</p>
                            <CustomButton text={order.solo.buttonText}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


