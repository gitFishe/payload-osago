import type {MessengersProps} from './Component'


export const MediaButtons = ({
    linkToMedia,
    socialLinkIcon,
    socialLinkName
                             }:MessengersProps) => {


    let additionalStyles = '';
    let mediaIcon = '';


    switch(socialLinkIcon) {
        case'telegram':
            additionalStyles = 'bg-[linear-gradient(203.21deg,_#37AEE2_21.69%,_#1E96C8_69.99%)]'
            mediaIcon = '/icons/telegram-small.svg'
            break
        case'viber':
            additionalStyles = 'bg-gradient-to-b from-[#A55CEE] to-[#854ABA]'
            mediaIcon = '/icons/viber-small.svg'
            break
    }

    return (
        <a href={linkToMedia} className={`w-55.75 flex items-center rounded-[40px] h-11.25 text-customDarkWhite justify-center font-bold cursor-pointer ${additionalStyles}`}>
            <div className='mr-2.5 max-w-7 max-h-7'>
                <img src={mediaIcon}/>
            </div>
            <span className='text-[18px] '>
                {socialLinkName}
            </span>
        </a>
    )
}

