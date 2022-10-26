import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  activeSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { playPause } = playerSlice.actions;

export default playerSlice.reducer;
