import React from "react";
import { Slider } from "@mui/material";

const Seekbar = ({ seekTime, setSeekTime }) => {
  return (
    <Slider
      value={seekTime}
      min={0}
      max={100}
      onChange={(e) => setSeekTime(e.target.value)}
      className="app__player-slider"
    />
  );
};

export default Seekbar;
