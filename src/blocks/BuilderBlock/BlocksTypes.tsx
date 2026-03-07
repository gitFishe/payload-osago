import type {Media} from "@/payload-types";

type BlockTypesProps = {
    key:string
    block:SelectionDetails
}

export default function BlockTypes ({id, block}:BlockTypesProps): React.JSX.Element  {

    let blockContent;
    let additionalClasses = ''
    let active = false;

    switch(block.blockType) {
        case'builderIconTextNoteDetail':
            blockContent = (
                <>
                    {block.icon ? (
                        <div className='mr-2.5 shrink-0'>
                            <img src={block.icon.url}/>
                        </div>
                    ) : ''}
                    <span className='wrap-break-word whitespace-normal'>
                        {block.text}
                    </span>
                </>
            )
            break
        case'builderInputDetail':
            blockContent = (
                <input className='w-full focus:outline-none' placeholder={block.placeholder}/>
            )
            additionalClasses = 'w-full'
            break
        case'people':
            blockContent = (
                <div>
                    dashjk
                </div>
            )
            break

        case'days':
            blockContent = (
               <div>

               </div>
            )
            break
    }

    console.log(block)

    return (
        <button key={id} className={`rounded-[10px] text-left cursor-pointer min-w-31.25 leading-4.5 text-base px-3 flex items-center h-14 bg-customDarkWhite ${additionalClasses} ${active ? 'border-customOrange border-2' : ''}`}>
            {blockContent}
        </button>
    )
}