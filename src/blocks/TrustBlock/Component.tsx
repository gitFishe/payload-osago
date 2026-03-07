import {SerializedEditorState} from "@payloadcms/richtext-lexical/lexical";
import {RichText} from "@/components/RichText";
import GuaranteeBanner from "@/blocks/TrustBlock/GuaranteeBanner";

type TrustBlockProps = {
    title:string,
    items: BlockArray[],
    guaranteeText:SerializedEditorState,
}

type BlockArray = {
    icon: object,
    text: SerializedEditorState,
    id: string,
}

export const TrustBlock = ({
    title,
    items,
    guaranteeText,
                           } : TrustBlockProps) => {

    console.log('asdas',items)

    return(
        <section className='py-20 bg-[#f8f9fb]'>
            <div className='container'>
                <div className='text-center text-customText mb-10 text-4xl text-bold'><h3>{title}</h3></div>
                <div className='flex justify-center flex-wrap mb-[-32px]'>
                    {items.map((item) => (
                        <div className='w-[calc((100%/5)-34px)] mb-8 mx-[17px] flex flex-col items-center' key={item.id}>
                            <div className='mx-auto mb-7 w-[120px] h-[120px] relative
                                before:content-[]
                                before:absolute
                                before:w-20
                                before:h-20
                                before:bg-[#E6EBFF]
                                before:top-0
                                before:right-0
                                before:rounded-xl
                            '>
                                <div className='w-[100px] h-[100px] rounded-2xl bg-white absolute left-0 bottom-0 flex justify-center items-center'>
                                    <img src={item.icon.url}></img>
                                </div>
                            </div>
                            <RichText className='text-black text-center text-base' data={item.text}/>
                        </div>
                    ))}
                </div>
                <GuaranteeBanner text={guaranteeText}/>
            </div>
        </section>
    )
}
