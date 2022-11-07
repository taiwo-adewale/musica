import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://musica-api.up.railway.app",
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/new" }),
    getNewReleases: builder.query({ query: () => "/new" }),
    getPopularSongs: builder.query({ query: () => "/popular" }),
    getPlaylists: builder.query({ query: () => "/playlist" }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetNewReleasesQuery,
  useGetPopularSongsQuery,
  useGetPlaylistsQuery,
} = shazamCoreApi;
