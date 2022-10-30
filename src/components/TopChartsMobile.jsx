import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

import { images } from "../constants";

const TopChartsMobile = ({ data }) => {
  const topCharts = data.slice(0, 10);

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={16}
      freeMode={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      mousewheel={{ invert: false, forceToAxis: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
    >
      {topCharts.map((song) => (
        <SwiperSlide key={song.key} className="w-[220px] sm:w-[250px]">
          <div className="flex-col p-3.5 gap-y-3 bg-altDark flex rounded-[20px]">
            <div className="flex justify-between gap-x-12">
              <img
                src={song.images?.coverart}
                alt={song.title}
                className="w-[100px] h-[100px] rounded-[10px]"
              />

              <div className="group hover:bg-primary mx-1 w-9 h-9 flex-center rounded-full border border-[rgba(255,255,255,0.11)] cursor-pointer transition-all duration-300">
                {images.heartIcon}
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-start min-w-0">
              <Link to={`/songs/${song.key}`} className="truncate">
                {song.title}
              </Link>
              <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-6">
                {song.subtitle}
              </p>
              <span className="text-sm">2:01</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopChartsMobile;
