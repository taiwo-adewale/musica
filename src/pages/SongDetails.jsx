import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { images } from "../constants";
import { AppWrap } from "../wrapper";
import {
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} from "../redux/services/shazamCore";
import { setActiveSong } from "../redux/features/playerSlice";
import { Error, Loader } from "../components";

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong } = useSelector((state) => state.player);
  const { data: song, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songid);
  const {
    data: relatedSongs,
    isFetching: isFetchingRelatedSongsDetails,
    error: relatedSongsError,
  } = useGetRelatedSongsQuery(songid);
  let i = 0;

  useEffect(() => {
    if (!isFetchingRelatedSongsDetails && !relatedSongsError) {
      const data = [song, ...relatedSongs];
      dispatch(setActiveSong({ song, data, i }));
    }
  }, [relatedSongs, song]);

  useEffect(() => {
    const addHeaderBg = () => {
      const header = document.querySelector("#header");
      if (document.documentElement.scrollTop !== 0) {
        header.classList.add("bg-bgDark");
      } else {
        header.classList.remove("bg-bgDark");
      }
    };

    document.addEventListener("scroll", addHeaderBg);

    return () => {
      document.removeEventListener("scroll", addHeaderBg);
    };
  }, []);

  return (
    <main
      className="px-4 lg:pl-24 lg:pr-[60px] pt-[70px] pb-[130px] md:pb-[150px] w-full min-h-screen z-[2] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(29, 33, 35, 0.75) 0%, rgba(29, 33, 35, 0.999) 80%), url(${
          isFetchingSongDetails
            ? images.album01
            : activeSong?.images?.coverart ||
              song?.images?.coverart ||
              images.album01
        })`,
      }}
    >
      <div className="flex flex-col md:flex-row gap-y-6 gap-x-7 items-start md:items-end">
        <div className="w-full sm:w-[300px] md:w-[40%] max-w-[380px] sm:max-w-[300px]">
          <img
            src={
              isFetchingSongDetails
                ? images.album01
                : activeSong?.images?.coverart ||
                  song?.images?.coverart ||
                  images.album01
            }
            alt="cover art"
            className="w-full rounded-[35px]"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <div className="w-full md:w-[80%] lg:w-[70%] mb-10">
            <h2 className="text-4xl font-bold text-[#A4C7C6] mb-3">
              {isFetchingSongDetails
                ? "Loading song..."
                : activeSong?.title || song?.title || "Loading song..."}
            </h2>

            <p className="text-sm text-light mb-2.5">
              {isFetchingSongDetails
                ? "Loading artistes.."
                : activeSong?.subtitle ||
                  song?.subtitle ||
                  "Loading artistes..."}
            </p>

            <p className="text-sm text-light">2:01</p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-2">
            <button className="flex-center gap-x-2.5 py-2.5 px-3 bg-[rgba(255,255,255,0.07)] rounded-[32px] text-[12px] flex-grow sm:flex-grow-0">
              <span>{images.playAlbumIcon}</span> Play all
            </button>
            <button className="flex-center gap-x-2.5 py-2.5 px-4 bg-[rgba(255,255,255,0.07)] rounded-[32px] text-[12px] flex-grow sm:flex-grow-0">
              <span>{images.addToCollectionIcon}</span> Add to collection
            </button>
            <button className="flex-center gap-x-2.5 p-2.5 px-4 sm:px-2.5 bg-[rgba(255,255,255,0.07)] rounded-[32px] sm:rounded-full text-[12px] flex-grow sm:flex-grow-0">
              {images.heartIconRed} <span className="sm:hidden">Like</span>
            </button>
          </div>
        </div>
      </div>

      <section className="pt-6 sm:pt-12 flex flex-col gap-y-3.5 md:gap-y-2.5">
        {isFetchingRelatedSongsDetails && (
          <Loader title="Fetching related songs..." />
        )}
        {relatedSongsError && <Error />}
        {relatedSongs &&
          relatedSongs.map((song) => (
            <div
              key={`relatedSong-${song.key}`}
              className="flex gap-x-3.5 sm:gap-x-6 items-center w-full bg-songCardBg rounded-[15px] px-2 py-2.5"
            >
              <div className="md:min-w-[10%] flex-shrink-0 flex gap-x-[18px] items-center">
                <img
                  src={song.images?.coverart || images.album01}
                  alt={song.title}
                  className="w-10 h-10 rounded-lg"
                />
                {images.heartAlbumIcon}
              </div>

              <div className="flex flex-col justify-between md:flex-row flex-grow min-w-0 gap-x-6">
                <Link
                  to={`/songs/${song.key}`}
                  className="text-[12px] flex-grow truncate md:w-[60%]"
                >
                  {song.title} ~ {song.subtitle}
                </Link>
                <span className="text-[10px] md:text-[12px] md:text-center truncate md:w-[40%]">
                  Single
                </span>
              </div>

              <div className="flex flex-col flex-shrink-0 md:flex-row items-end gap-y-1.5 self-end md:self-center px-2 md:p-0 md:w-[30%] md:justify-between">
                <span className="text-[12px]  order-2 md:order-1 md:text-center md:w-[70%]">
                  2.01
                </span>

                <button className="flex flex-col order-1 md:order-2 gap-y-[3px] md:gap-y-1 md:self-center p-0.5 md:px-3.5 md:py-1">
                  <span className="w-0.5 h-0.5 rounded-full bg-primary"></span>
                  <span className="w-0.5 h-0.5 rounded-full bg-primary"></span>
                  <span className="w-0.5 h-0.5 rounded-full bg-primary"></span>
                </button>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default AppWrap(SongDetails, "songdetails");
