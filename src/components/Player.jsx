import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { images } from "../constants";
import { FaPause } from "react-icons/fa";
import { playPause, nextSong, prevSong } from "../redux/features/playerSlice";
import VolumeBar from "./VolumeBar";
import Seekbar from "./Seekbar";
import AudioPlayer from "./AudioPlayer";
import Track from "./Track";

const Player = () => {
  const dispatch = useDispatch();

  const { isPlaying, isPlayerActive, activeSong, currentIndex, currentSongs } =
    useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const handlePlayPause = () => {
    isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true));
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div
      className={`app__player z-[19] fixed left-0 right-0 h-[90px] md:h-[110px] bg-[rgba(29,33,35,0.3)] border-t border-t-[rgba(255,255,255,0.1)] xs:px-4 px-8 lg:pl-24 lg:pr-[60px] py-6 transition-all duration-500 ${
        isPlayerActive ? "bottom-0" : "-bottom-[90px] md:-bottom-[110px]"
      }`}
    >
      <div className="flex gap-x-6 w-full h-full items-center">
        <Track activeSong={activeSong} />

        <div className="md:w-[65%] xl:w-[70%] h-full hidden md:flex flex-col justify-between items-center">
          <div className="flex gap-x-[42px] items-center">
            <span
              className={shuffle ? "fill-primary" : "fill-white"}
              onClick={() => setShuffle((prev) => !prev)}
            >
              {images.shuffleIcon}
            </span>
            <span onClick={handlePrevSong}>{images.previousIcon}</span>
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
            <span onClick={handleNextSong}>{images.nextIcon}</span>
            <span
              className={repeat ? "fill-primary" : "fill-white"}
              onClick={() => setRepeat((prev) => !prev)}
            >
              {images.repeatOneIcon}
            </span>
          </div>

          <Seekbar
            appTime={appTime}
            seekTime={seekTime}
            setSeekTime={setSeekTime}
            min={0}
            max={duration}
          />

          {isPlayerActive && (
            <AudioPlayer
              seekTime={seekTime}
              activeSong={activeSong}
              isPlaying={isPlaying}
              repeat={repeat}
              volume={volume}
              onEnded={handleNextSong}
              onTimeUpdate={(e) => setAppTime(e.target.currentTime)}
              onLoadedData={(e) => setDuration(e.target.duration)}
            />
          )}
        </div>

        <VolumeBar volume={volume} setVolume={setVolume} />

        <div className="flex gap-x-5 xs:gap-x-3 mr-1.5 items-center md:hidden">
          <div
            onClick={handlePlayPause}
            className="bg-primary cursor-pointer rounded-full flex-center w-[34px] h-[34px] shadow-[0_0_18px_rgba(255,255,255,0.3)]"
          >
            {isPlaying ? (
              <FaPause className="fill-[#efeee0] w-3 h-3 md:w-2 md:h-2" />
            ) : (
              images.playIcon
            )}
          </div>
          <span onClick={handleNextSong}>{images.nextIcon}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
