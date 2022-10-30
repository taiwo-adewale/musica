import React from "react";
import { Link } from "react-router-dom";

const Track = ({ activeSong }) => {
  return (
    <div className="w-1/2 flex-grow md:w-1/5 xl:w-[15%] flex gap-x-3">
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="w-[50px] h-[50px] rounded-[16px] md:rounded-full"
      />

      <div className="flex flex-col mt-1 min-w-0">
        <Link
          to={activeSong && `/songs/${activeSong.key}`}
          className="text-sm truncate"
        >
          {activeSong?.title}
        </Link>
        <span className="text-[12px] text-[rgba(255,255,255,0.44)] truncate">
          {activeSong?.subtitle}
        </span>
      </div>
    </div>
  );
};

export default Track;
