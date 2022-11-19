import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isPlayerActive: false,
  currentIndex: 0,
  currentSongs: null,
  activeSong: {},
  topCharts: null,
  playlists: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;

      state.currentIndex = action.payload.i;
      state.isPlayerActive = true;

      if (action.payload.playNow) {
        state.isPlaying = true;
      }
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];

      state.currentIndex = action.payload;
      state.isPlaying = true;
      state.isPlayerActive = true;
    },
    prevSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];

      state.currentIndex = action.payload;
      state.isPlayerActive = true;
    },
    setTopCharts: (state, action) => {
      state.topCharts = action.payload;
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
  },
});

export const {
  setActiveSong,
  playPause,
  nextSong,
  prevSong,
  setTopCharts,
  setPlaylists,
} = playerSlice.actions;

export default playerSlice.reducer;
