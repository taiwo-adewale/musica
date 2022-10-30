import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isPlayerActive: false,
  currentIndex: 0,
  currentSongs: null,
  activeSong: {},
  topCharts: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isPlayerActive = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isPlaying = true;
      state.isPlayerActive = true;
    },
    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isPlayerActive = true;
    },
    setTopCharts: (state, action) => {
      state.topCharts = action.payload;
    },
  },
});

export const { setActiveSong, playPause, nextSong, prevSong, setTopCharts } =
  playerSlice.actions;

export default playerSlice.reducer;
