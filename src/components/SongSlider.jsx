import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useDispatch } from "react-redux";

import { Loader, Error } from ".";
import { setActiveSong } from "../redux/features/playerSlice";

const SongSlider = ({ data, isFetching, error, loadingMsg }) => {
  if (isFetching) return <Loader title={loadingMsg} />;

  if (error) return <Error />;

  const dispatch = useDispatch();

  const handleSetActiveSong = (song, data, i, playNow) => {
    dispatch(setActiveSong({ song, data, i, playNow }));
  };

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
      {data?.map((song, index) => (
        <SwiperSlide
          key={song.id}
          className="w-[180px] sm:w-[200px] lg:w-[220px] xl:w-[250px] xxl:w-[300px]"
        >
          <div className="flex flex-col h-full">
            <img
              src={song?.cover}
              alt="new release"
              className="cursor-pointer rounded-[25px] mb-[5px] h-[180px] sm:h-[200px] lg:h-[220px] xl:h-[250px] xxl:h-[300px]"
              onClick={() => handleSetActiveSong(song, data, index, true)}
            />

            <h4
              className="text-sm cursor-pointer"
              onClick={() => handleSetActiveSong(song, data, index, true)}
            >
              {song.title}
            </h4>

            <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
              {song.artist}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SongSlider;
