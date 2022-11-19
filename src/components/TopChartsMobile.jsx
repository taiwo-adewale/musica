import React from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

import { images } from "../constants";
import { setActiveSong } from "../redux/features/playerSlice";

const TopChartsMobile = ({ topCharts }) => {
  const dispatch = useDispatch();

  const handleSetActiveSong = (song, data, i, playNow) => {
    dispatch(setActiveSong({ song, data, i, playNow }));
  };

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
      {topCharts &&
        topCharts.slice(0, 10).map((song, index) => (
          <SwiperSlide
            key={`mobile-${song.id}`}
            className="w-[220px] sm:w-[250px]"
          >
            <div className="flex-col p-3.5 gap-y-3 bg-altDark flex rounded-[20px]">
              <div className="flex justify-between gap-x-12">
                <Link to={`/songs/${song.id}`}>
                  <img
                    src={song?.cover}
                    alt={song.title}
                    className="w-[100px] h-[100px] rounded-[10px]"
                    onClick={() =>
                      handleSetActiveSong(song, topCharts, index, true)
                    }
                  />
                </Link>

                <div className="group hover:bg-primary mx-1 w-9 h-9 flex-center rounded-full border border-[rgba(255,255,255,0.11)] cursor-pointer transition-all duration-300">
                  {images.heartIcon}
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-start min-w-0">
                <Link
                  to={`/songs/${song.id}`}
                  className="truncate"
                  onClick={() =>
                    handleSetActiveSong(song, topCharts, index, true)
                  }
                >
                  {song.title}
                </Link>
                <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-6">
                  {song.artist}
                </p>
                <span className="text-sm">{song.duration}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TopChartsMobile;
