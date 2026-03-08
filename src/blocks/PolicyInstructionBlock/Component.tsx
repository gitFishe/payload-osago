import { RichText } from "@/components/RichText";
import {Media} from "@/payload-types";
import {SerializedEditorState} from "lexical";


interface BlockLink {
    id:string,
    img?:Media,
    text:SerializedEditorState,
}

interface Messengers {
    description:string,
    links: {
        id: string,
        linkToMedia: string,
        socialLinkIcon: string,
        socialLinkName: string,
    }
}

interface Solo {
    buttonLink?:string,
    buttonText?:string,
    description?:string,
    title?: SerializedEditorState,
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
        contacts: {
            messengers:Messengers,
            solo:Solo,
        }
    }
}

export const PolicyInstructionBlock = ({
    id,
    instruction,
    order,
                                       }:PolicyInstructionProps) => {

    console.log(order.contacts, 'props.instruction')

    return(
        <section className='text-customText bg-white'>
            <div className='container'>
                <div>
                    <div>
                        <RichText data={order.title}/>
                        <div>
                            <RichText data={order.title}/>
                        </div>
                    </div>
                    <div className='border border-[#F0F1F3] rounded-[15px] py-10 px-7.5'>
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
                                    console.log(elem.img)
                                return (
                                    <div className='flex items-center py-5 bg-[#F8F9FB] rounded-[20px] px-6.75'>
                                        <div className='w-29 h-17.5 bg-[#E6EBFF] rounded-[10px] border border-[#C3CFFF] flex items-center justify-center mr-5.75'>
                                            <img src={elem.img?.url || undefined}/>
                                        </div>
                                        <div>
                                            <RichText data={elem.text} className='font-bold [&_strong]:text-customBlue [&_strong]:font-bold'/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


