import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from 'react-router-dom';

import { images } from '../constants'

const ChartsSlider = ({topCharts}) => {
  return (
    <Swiper
      spaceBetween={16}
      freeMode={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      mousewheel={{invert: false, forceToAxis: true}}
      scrollbar={{ draggable: true }}
      breakpoints={
        {
          0: {
            slidesPerView: 0.9
          },
          320: {
            slidesPerView: 1
          },
          360 : {
            slidesPerView: 1.2
          },
          430: {
            slidesPerView: 1.5
          },
          500: {
            slidesPerView: 1.8
          },
          576: {
            slidesPerView: 2
          },
          670: {
            slidesPerView: 2.3
          },
          760: {
            slidesPerView: 2.5
          }
        }
      }
      className="mySwiper"
    >
      { topCharts.map((chart, index) => (
        <SwiperSlide key={`chart-${index}`}>
          <div className='flex-col p-3.5 gap-y-3 bg-altDark flex rounded-[20px]'>
            <div className="flex justify-between">
              <img src={chart.coverImg} alt="top chart" className='w-[100px] h-[100px] rounded-[10px]' />

              <div className='group hover:bg-primary mx-1 w-9 h-9 flex-center rounded-full border border-[rgba(255,255,255,0.11)] cursor-pointer transition-all duration-300'>
                {images.heartIcon}
              </div>
            </div>

            <div className='flex flex-col flex-1 justify-start min-w-0'>
              <Link to='/albums' className='truncate'>{chart.title}</Link>
                <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-6">{chart.artiste}</p>
                <span className='text-sm'>{chart.duration}</span>
              </div>
        </div>
        </SwiperSlide>
      )) }
    </Swiper>
  )
}

export default ChartsSlider