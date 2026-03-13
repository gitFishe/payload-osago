'use client'

import {SerializedEditorState} from "lexical";
import {RichText} from "@payloadcms/richtext-lexical/react";
import {Media} from "@/payload-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SlideProps {
  review?:string,
  ReviewersName?:string,
  id:string,
  ReviewSource?: {
    link:string,
    text:string,
  }
}

interface TabProps {
  tabsSocialNetwork:string,
  tabsIcon:Media,
  tabsTitle?:string,
  tabsGrade:SerializedEditorState,
  slides:SlideProps[],
}

type SwiperBlockProps = {
  blockDescription:string,
  blockTitle:string,
  tabs:Record<string, TabProps>;
}

export const SwiperBlock = ({
  blockDescription,
  blockTitle,
  tabs
}:SwiperBlockProps) => {


  const tabEntries = tabs ? Object.entries(tabs) : []
  const firstTab = tabEntries[0]?.[1]


  return (
      <section className='bg-white'>
        <div className='container'>
          <div className='mb-5 text-4xl'>
            <h2>{blockTitle}</h2>
          </div>
          <div className='mb-10 text-customTextGray text-[18px] leading-6'>
            <p>{blockDescription}</p>
          </div>
          <div className='flex rounded-[15px] border border-[#F0F1F3] mx-auto overflow-hidden'>
              {tabEntries.map(([key,tab]) => (
                  <button className='flex hover:bg-[#e6ebff] cursor-pointer pt-3.75 px-10 pb-3' key={key}>
                      <div className='w-12 h-12 shrink-0 mr-2.5'>
                        <img src={tab.tabsIcon.url || undefined}/>
                      </div>
                      <div className='text-left'>
                          <span className='text-customText'>{tab.tabsTitle}</span>
                          <RichText className='[&_strong]:text-customBlue text-customTextGray' data={tab.tabsGrade}/>
                      </div>
                  </button>
              ))}
          </div>
        </div>
          <Swiper
              spaceBetween={20}
              slidesPerView={5}
          >
              {firstTab.slides.map((item, index) => (
                  <SwiperSlide key={item.id ?? index}>
                    <div className='absolute left-5 -top-5 w-22.25 h-17.25'>
                      <img src='/icons/paws.svg'/>
                    </div>
                    <div className='relative rounded-[20px] bg-[#f8f9fb] pt-15 px-10 pb-10'>
                      <p className='text-customText'>{item.review}</p>
                    </div>
                  </SwiperSlide>
            ))}
          </Swiper>
      </section>
  )
}
