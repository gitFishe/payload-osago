'use client'
import { CMSLink } from '@/components/Link'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import React, { Suspense } from 'react'

import { MobileMenu } from './MobileMenu'
import type { Header } from 'src/payload-types'

import { LogoIcon } from '@/components/icons/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'
import {getCachedGlobal} from "@/utilities/getGlobals";
// import ListButton from "@/components/ListButton/ListButton";
import SocialLinks from "@/components/ui/social-links/SocialLinks";
import ContactInfo from "@/components/ui/ContactInfo";

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
    console.log('header', header)

    const navItems = header?.navItems || []
    const buttonItems = header?.button?.buttonLinks || [];
    const logo = header?.headerLogo || ''
    const socialMedia = header.socialMedia || [];
    const contactInfo = header.contactInfo || [];

    return (
    <div className="relative z-20 border-b bg-customGray">
        <nav className="flex items-center md:items-end justify-between container pt-2">
            <div className='flex items-center w-full'>
                <div className='w-[240px] h-[85px] mr-14'>
                  <img className='max-w-none h-full' src={logo.url} alt=""/>
                </div>
                <div className='flex items-center mr-1'>
                  {navItems.map((item) => (
                      <Link key={item.id} href={item.href} className='mr-9 text-black'>
                          {item.label}
                      </Link>
                  ))}
                </div>
                {/*<ListButton list={buttonItems}/>*/}
                <SocialLinks array={socialMedia}/>
                <ContactInfo data={contactInfo} isWorkingTimeShown={true}/>
            </div>
        </nav>
    </div>
    )
}

