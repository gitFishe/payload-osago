import Link from "next/link";

type socialLink = {
    type: string;
    id?: string | null;
    href: string;
}

const icons: Record<string,string> = {
    telegram:'/icons/telegram.svg',
    whatsup:'/icons/whatsup.svg',
    viber:'/icons/viber.svg',
    instagram:'/icons/instagram.svg',
}

export default function SocialLinks({
    array,
    className,
} : {
    array: socialLink[],
    className?: string
}) {

if(array.length === 0 ) return null



    return (
        <div className={`flex items-center [&>*:not(:last-child)]:mr-2 mr-2.5 ${className ? className : ''}`}>
            {array.map((item) => {

                let icon = icons[item.type]

                return(
                        <Link
                            key={item.id}
                            href={item.href}
                            className='w-10 h-10 rounded-[10px] overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1)]'
                        >
                            <img src={icon} alt=""/>
                        </Link>
                    )


            })}
        </div>
    )
}