import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebaseConfig";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      async queryFn() {
        try {
          const songsRef = collection(db, "new-releases");
          const querySnaphot = await getDocs(songsRef);
          let songs = [];
          querySnaphot?.forEach((doc) => {
            songs.push(doc.data());
          });
          return { data: songs };
        } catch (error) {
          return { error };
        }
      },
    }),
    getNewReleases: builder.query({
      async queryFn() {
        try {
          const songsRef = collection(db, "new-releases");
          const querySnaphot = await getDocs(songsRef);
          let songs = [];
          querySnaphot?.forEach((doc) => {
            songs.push(doc.data());
          });
          return { data: songs };
        } catch (error) {
          return { error };
        }
      },
    }),
    getPopularSongs: builder.query({
      async queryFn() {
        try {
          const songsRef = collection(db, "popular");
          const querySnaphot = await getDocs(songsRef);
          let songs = [];
          querySnaphot?.forEach((doc) => {
            songs.push(doc.data());
          });
          return { data: songs };
        } catch (error) {
          return { error };
        }
      },
    }),
    getPlaylists: builder.query({
      async queryFn() {
        try {
          const songsRef = collection(db, "playlist");
          const querySnaphot = await getDocs(songsRef);
          let songs = [];
          querySnaphot?.forEach((doc) => {
            songs.push(doc.data());
          });
          return { data: songs };
        } catch (error) {
          return { error };
        }
      },
    }),
    getSongDetails: builder.query({
      async queryFn(category) {
        if (category === "new") category = "new-releases";
        try {
          const songsRef = collection(db, category);
          const querySnaphot = await getDocs(songsRef);
          let songs = [];
          querySnaphot?.forEach((doc) => {
            songs.push(doc.data());
          });
          return { data: songs };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetNewReleasesQuery,
  useGetPopularSongsQuery,
  useGetPlaylistsQuery,
  useGetSongDetailsQuery,
} = shazamCoreApi;
