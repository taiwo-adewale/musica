import React from "react";
import { Slider } from "@mui/material";

const Seekbar = ({ appTime, setSeekTime, min, max }) => {
  return (
    <Slider
      value={appTime}
      min={min}
      max={max}
      step={1}
      onChange={(e) => setSeekTime(e.target.value)}
      className="app__player-slider"
    />
  );
};

export default Seekbar;
