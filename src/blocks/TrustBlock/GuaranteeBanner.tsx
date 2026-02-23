import {RichText} from "@/components/RichText";
import {SerializedEditorState} from "@payloadcms/richtext-lexical/lexical";

export default function GuaranteeBanner({text}:{text:SerializedEditorState}) {
    return(
        <div className='rounded-[15px] p-[3px] bg-gradient-to-r from-[#3A62FF]/20 to-white/20 w-[754px] h-[100px] mx-auto mt-10'>
            <div className='rounded-[12px] bg-white flex items-center px-10'>
                <div className='mr-4'>
                    <img src='/media/guarantee-100%25.svg'/>
                </div>
                <RichText className='[&_strong]:text-customBlue text-customText font-bold text-xl' data={text}/>
                <div className='translate-y-[-15px] ml-auto'>
                    <img src='/media/guarantee-symbol.png'/>
                </div>
            </div>
        </div>
    )
}
