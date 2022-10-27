import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import TopChartsMobile from "./TopChartsMobile";
import { images } from "../constants";
import { setActiveSong } from "../redux/features/playerSlice";

const TopCharts = ({ topChartsData }) => {
  const topCharts = topChartsData.slice(0, 3);

  const dispatch = useDispatch();

  return (
    <>
      <h3 className="head-text">Top charts</h3>

      {topCharts.map((chart) => (
        <div key={chart.key} className="hidden midMd:flex flex-col gap-y-3">
          <div className="bg-altDark flex rounded-[20px] p-4 gap-x-3 xl:gap-x-3.5 items-start justify-start">
            <img
              src={chart.images?.coverart}
              alt={chart.title}
              className="w-16 h-16 rounded-[10px]"
            />

            <div className="flex flex-col flex-1 justify-start min-w-0">
              <Link to="/songs/1" className="truncate">
                {chart.title}
              </Link>
              <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-1 truncate">
                {chart.subtitle}
              </p>
              <span className="text-[12px]">2:01</span>
            </div>

            <div className="flex-center flex-shrink-0 h-full">
              <div className="group hover:bg-primary mx-1 w-9 h-9 flex-center rounded-full border border-[rgba(255,255,255,0.11)] cursor-pointer transition-all duration-300">
                {images.heartIcon}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex midMd:hidden">
        <TopChartsMobile topChartsData={topChartsData} />
      </div>
    </>
  );
};

export default TopCharts;
