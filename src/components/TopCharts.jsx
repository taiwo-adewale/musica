import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { images } from "../constants";
import { Loader, Error, TopChartsMobile } from "./index";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { setActiveSong, setTopCharts } from "../redux/features/playerSlice";

const TopCharts = () => {
  const { topCharts, currentSongs } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const { data, isFetching, error } = useGetTopChartsQuery();

  useEffect(() => {
    if (!isFetching && !error) {
      const song = data[0];
      const i = 0;

      dispatch(setTopCharts(data));

      if (!currentSongs) {
        dispatch(setActiveSong({ song, data, i }));
      }
    }
  }, [data]);

  if (isFetching) return <Loader title="Loading top charts..." />;

  if (error) return <Error />;

  return (
    <>
      {topCharts &&
        topCharts.slice(0, 3).map((song) => (
          <div key={song.key} className="hidden midMd:flex flex-col gap-y-3">
            <div className="bg-altDark flex rounded-[20px] p-4 gap-x-3 xl:gap-x-3.5 items-start justify-start">
              <img
                src={song.images?.coverart}
                alt={song.title}
                className="w-16 h-16 rounded-[10px]"
              />

              <div className="flex flex-col flex-1 justify-start min-w-0">
                <Link to={`/songs/${song.key}`} className="truncate">
                  {song.title}
                </Link>
                <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-1 truncate">
                  {song.subtitle}
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
        {topCharts && <TopChartsMobile data={topCharts} />}
      </div>
    </>
  );
};

export default TopCharts;
