import React from "react";
import { useDispatch } from "react-redux";

import { AppWrap } from "../wrapper";
import { images } from "../constants";
import { TopCharts, SongSlider } from "../components";
// import { topCharts, likes, newReleases, popular } from "../data";
import { likes } from "../data";
import {
  useGetPopularSongsQuery,
  useGetNewReleasesQuery,
} from "../redux/services/shazamCore";
import { setActiveSong } from "../redux/features/playerSlice";

const Home = () => {
  const {
    data: popularSongs,
    isFetching: isFetchingPopularSongs,
    error: popularSongsError,
  } = useGetPopularSongsQuery();

  const {
    data: newReleases,
    isFetching: isFetchingNewReleases,
    error: newReleasesError,
  } = useGetNewReleasesQuery();

  return (
    <>
      <div className="flex flex-wrap midMd:flex-nowrap w-full gap-x-6 gap-y-6 py-4">
        <div className="w-full relative midMd:w-[65%] xl:w-3/5 h-[500px] sm:h-[400px]">
          <div className="relative w-full h-full bg-[#609EAF] rounded-[20px] sm:rounded-[40px] z-[2] overflow-hidden">
            <img
              src={images.heroVector}
              alt=""
              className="absolute -top-[180px] left-[10%] sm:left-auto sm:-top-[280px] sm:!-right-[200px] rotate-90 sm:rotate-0"
            ></img>
            <img
              src={images.heroPerson}
              alt=""
              className="absolute -right-[20px] hidden sm:block h-full w-[60%] md:w-[55%]"
            />

            <div className="absolute py-10 px-[30px] sm:px-10 left-0 top-0 bottom-0 flex flex-col sm:justify-between">
              <p className="text-[12px] flex-grow sm:flex-grow-0">
                Curated playlist
              </p>

              <div className="mb-[46px] sm:mb-0">
                <h2 className="font-bold text-4xl mb-1 sm:mb-0">R & B Hits</h2>
                <p className="text-sm">
                  All mine, Lie again, Petty call me everyday, <br />
                  Out of time, No love, Bad habit, <br />
                  and so much more
                </p>
              </div>

              <div className="flex items-center gap-x-3 flex-wrap sm:flex-nowrap gap-y-2">
                <div className="flex">
                  {likes.map((like, index) => (
                    <img
                      key={`like-0${index}`}
                      src={like}
                      alt="likes"
                      className="w-[34px] h-[34px] sm:w-5 sm:h-5 first:ml-0 -ml-[9px] rounded-full"
                    />
                  ))}
                </div>

                <div className="flex gap-x-2 items-center">
                  {images.heartIconWhite}
                  <span className="text-2xl sm:text-sm">33k Likes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[10%] w-[80%] -bottom-[20px] h-[20px] z-[1]"></div>
        </div>

        <div className="flex flex-col gap-y-3.5 midMd:h-[400px] w-full midMd:w-[35%] xl:w-2/5">
          <h3 className="head-text">Top charts</h3>
          <TopCharts />
        </div>
      </div>

      <section className="pt-8 space-y-3">
        <h3 className="head-text">New releases.</h3>

        <SongSlider
          data={newReleases}
          isFetching={isFetchingNewReleases}
          error={newReleasesError}
          loadingMsg="Loading new releases..."
        />
      </section>

      <section className="pt-8 space-y-3">
        <h3 className="head-text">Popular in your area</h3>

        <SongSlider
          data={popularSongs}
          isFetching={isFetchingPopularSongs}
          error={popularSongsError}
          loadingMsg="Loading popular songs..."
        />
      </section>
    </>
  );
};

export default AppWrap(Home);
