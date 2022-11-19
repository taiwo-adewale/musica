import React, { useRef, useEffect } from "react";

const AudioPlayer = ({
  appTime,
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

  if (ref.current) {
    if (isPlaying) {
      appTime > 0
        ? handleCanPlay()
        : ref.current.addEventListener("canplay", handleCanPlay);
    } else {
      ref.current.pause();
    }
  }

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
