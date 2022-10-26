import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { images } from "../constants";
import { FaPause } from "react-icons/fa";
import { playPause } from "../redux/features/playerSlice";
import VolumeBar from "./VolumeBar";
import Seekbar from "./Seekbar";
import AudioPlayer from "./AudioPlayer";

const Player = () => {
  const dispatch = useDispatch();

  const { isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const handlePlayPause = () => {
    isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true));
  };

  return (
    <div className="app__player z-[19] fixed left-0 bottom-0 right-0 h-[90px] md:h-[110px] bg-[rgba(29,33,35,0.3)] border-t border-t-[rgba(255,255,255,0.1)] xs:px-4 px-8 lg:pl-24 lg:pr-[60px] py-6">
      <div className="flex gap-x-6 w-full h-full items-center">
        <div className="w-1/2 flex-grow md:w-1/5 xl:w-[15%] flex gap-x-3">
          <img
            src={images.release01}
            alt="seasons in"
            className="w-[50px] h-[50px] rounded-[16px] md:rounded-full"
          />

          <div className="flex flex-col mt-1 min-w-0">
            <h4 className="text-sm truncate">Seasons in</h4>
            <span className="text-[12px] text-[rgba(255,255,255,0.44)]">
              James
            </span>
          </div>
        </div>

        <div className="md:w-[65%] xl:w-[70%] h-full hidden md:flex flex-col justify-between items-center">
          <div className="flex gap-x-[42px] items-center">
            <span
              className={shuffle ? "fill-primary" : "fill-white"}
              onClick={() => setShuffle((prev) => !prev)}
            >
              {images.shuffleIcon}
            </span>
            <span>{images.previousIcon}</span>
            <div
              onClick={handlePlayPause}
              className="bg-primary cursor-pointer rounded-full flex-center w-[25px] h-[25px] shadow-[0_0_18px_rgba(255,255,255,0.3)]"
            >
              {isPlaying ? (
                <FaPause className="fill-[#efeee0] md:w-2 md:h-2" />
              ) : (
                images.playIcon
              )}
            </div>
            <span>{images.nextIcon}</span>
            <span
              className={repeat ? "fill-primary" : "fill-white"}
              onClick={() => setRepeat((prev) => !prev)}
            >
              {images.repeatOneIcon}
            </span>
          </div>

          <Seekbar seekTime={seekTime} setSeekTime={setSeekTime} />
          <AudioPlayer repeat={repeat} volume={volume} />
        </div>

        <div className="md:w-[15%] hidden md:block">
          <VolumeBar volume={volume} setVolume={setVolume} />
        </div>

        <div className="flex gap-x-5 xs:gap-x-3 mr-1.5 items-center md:hidden">
          <div
            onClick={handlePlayPause}
            className="bg-primary cursor-pointer rounded-full flex-center w-[34px] h-[34px] shadow-[0_0_18px_rgba(255,255,255,0.3)]"
          >
            {isPlaying ? (
              images.playIcon
            ) : (
              <FaPause className="fill-[#efeee0] w-3 h-3 md:w-2 md:h-2" />
            )}
          </div>
          {images.nextIcon}
        </div>
      </div>
    </div>
  );
};

export default Player;
