import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const SongSlider = ({data, keyName}) => {
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      mousewheel={{invert: false, forceToAxis: true}}
      scrollbar={{ draggable: true }}
      breakpoints={
        {
          0: {
            slidesPerView: 1.2
          },
          350: {
            slidesPerView: 1.9
          },
          450 : {
            slidesPerView: 2.6
          },
          576: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3.8
          },
          992: {
          slidesPerView: 4.3
          },
          1200: {
            slidesPerView: 5.5
          },
          1700 : {
            slidesPerView: 6.2
          }
        }
      }
      className="mySwiper"
    >
      { data.map((song, index) => (
        <SwiperSlide key={`${keyName}-0${index}`}>
          <div className='flex flex-col'>
            <img src={song.coverImg} alt="new release" className='rounded-[25px] mb-[5px]' />

            <h4 className="text-sm">{song.title}</h4>

            <span className='text-[12px] text-[rgba(255,255,255,0.5)]'>{song.artiste}</span>
          </div>
        </SwiperSlide>
      )) }
    </Swiper>
  )
}

export default SongSlider