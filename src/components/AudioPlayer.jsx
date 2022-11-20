import React, { useRef, useEffect } from "react";

const AudioPlayer = ({
  seekTime,
  activeSong,
  repeat,
  volume,
  isPlaying,
  onEnded,
  onTimeUpdate,
  onLoadedData,
}) => {
  const ref = useRef(null);

  const handleCanPlay = () => {
    ref.current.play();
  };

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.addEventListener("canplay", handleCanPlay);
      } else {
        ref.current.pause();
      }
    }
  }, [activeSong]);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.audio}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default AudioPlayer;
