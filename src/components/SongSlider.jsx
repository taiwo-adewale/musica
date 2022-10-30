import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const SongSlider = ({ data, keyName }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      mousewheel={{ invert: false, forceToAxis: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
    >
      {data.map((song, index) => (
        <SwiperSlide
          key={`${keyName}-0${index}`}
          className="w-[180px] sm:w-[200px] lg:w-[220px] xl:w-[250px] xxl:w-[300px]"
        >
          <div className="flex flex-col">
            <img
              src={song.coverImg}
              alt="new release"
              className="rounded-[25px] mb-[5px]"
            />

            <h4 className="text-sm">{song.title}</h4>

            <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
              {song.artiste}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SongSlider;
