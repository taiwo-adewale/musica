import React from "react";
import { Slider } from "@mui/material";

import { images } from "../constants";

const VolumeBar = ({ volume, setVolume }) => {
  return (
    <div className="md:w-[15%] hidden md:block">
      <div className="flex items-center gap-x-1.5">
        <span
          onClick={() =>
            setVolume((prevVolume) => (prevVolume === 0 ? 100 : 0))
          }
        >
          {images.volumeIcon}
        </span>

        <Slider
          value={volume}
          onChange={setVolume}
          min={0}
          max={1}
          step={0.01}
          className="app__player-volume"
        />
      </div>
    </div>
  );
};

export default VolumeBar;
