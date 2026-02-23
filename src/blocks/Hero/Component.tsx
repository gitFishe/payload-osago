import React from 'react'
import Link from 'next/link'
import type { SerializedEditorState } from 'lexical'
import {RichText} from "@/components/RichText";
import styles from './Hero.module.css'
import CustomButton from "@/components/CustomButton/CustomButton";

type Props = {
    heading: SerializedEditorState
    text?: string
    minPrice: number
    pricePrefix?: string
    priceSuffix?: string
    button: {
        label: string
        href: string
    }
    backgroundImageUrl?: any // upload може бути string або object (залежить від depth)
    id?: string
}

function formatUAH(value: number) {
    return new Intl.NumberFormat('uk-UA').format(value)
}

export const PromoHeroBlock: React.FC<Props> = ({
                                                    heading,
                                                    text,
                                                    minPrice,
                                                    pricePrefix = 'від',
                                                    priceSuffix = '₴',
                                                    button,
                                                    backgroundImageUrl,
                                                    id,
                                                }) => {
    const bgUrl =
        typeof backgroundImageUrl === 'string'
            ? backgroundImageUrl
            : backgroundImageUrl?.url // якщо media популиться як обʼєкт

    console.log(heading)

    return (
        // <section id={id} className="relative overflow-hidden rounded-2xl">
        //     {bgUrl ? (
        //         <>
        //             <div
        //                 className="absolute inset-0 bg-cover bg-center"
        //                 style={{ backgroundImage: `url(${bgUrl})` }}
        //                 aria-hidden="true"
        //             />
        //             <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        //         </>
        //     ) : (
        //         <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        //     )}
        //     <div className="relative p-6 md:p-10">
        //         <div className="max-w-2xl">
        //             <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
        //                 {heading}
        //             </h2>
        //
        //             {text ? <p className="mt-3 text-white/90">{text}</p> : null}
        //
        //             <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        //                 <div className="rounded-xl bg-white/10 backdrop-blur px-4 py-3">
        //                     <div className="text-white/75 text-sm">Мінімальна ціна</div>
        //                     <div className="text-white text-2xl font-semibold flex items-baseline gap-2">
        //                         <span className="text-white/80 text-base">{pricePrefix}</span>
        //                         <span>{formatUAH(minPrice)}</span>
        //                         <span className="text-white/80 text-base">{priceSuffix}</span>
        //                     </div>
        //                 </div>
        //
        //                 <Link
        //                     href={button?.href ?? '#'}
        //                     className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
        //                 >
        //                     {button?.label ?? 'Переглянути'}
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <div id={id} className='rounded-[20px] overflow-hidden relative h-[623px] w-full bg-white border-[#f0f1f3] border'>
            <div className='absolute right-0 top-0 h-full'>
                <div className='bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_11.94%,rgba(255,255,255,0)_45.68%)] absolute left-0 h-full w-full'></div>
                <div className='w-[612px] h-full right-0'>
                    <img className='h-full max-w-none' src={bgUrl} alt=""/>
                </div>
            </div>
            <div className='p-20 pr-0 w-[576px] relative z-2'>
                <div className='rounded-[10px] mb-7 overflow-hidden flex w-fit h-10 *:px-3 *:h-full *:flex *:items-center font-bold'>
                    <span className='bg-[#e6ebff] text-[#3A62FF]'>АКЦИОННОЕ ПРЕДЛОЖЕНИЯ ДНЯ</span>
                    <span className='bg-[#ffa63a]'>{pricePrefix} {minPrice} {priceSuffix}</span>
                </div>
                {heading ? <h3><RichText className={`mb-8 text-[46px] leading-[50px] !text-[#010F32] font-bold [&_span]:text-[#3A62FF] ${styles.underline}`} data={heading}/></h3> : null}
                <p className='text-[#748DB1] text-xl mb-8'>{text}</p>
                <CustomButton/>
            </div>
        </div>
    )
}
