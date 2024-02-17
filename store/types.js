import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
  name: "type",
  initialState: {
    type: "all",
    platform: "PC",
    tagModal: false,
  },
  reducers: {
    filterGames: (state, action) => {
      state.type = action.payload.type;
    },
    filterPlatform: (state, action) => {
      state.platform = action.payload.platform;
    },
    setModal: (state) => {
      state.tagModal = !state.tagModal;
    },
  },
});

export const filterGames = typeSlice.actions.filterGames;
export const setModal = typeSlice.actions.setModal;
export const filterPlatform = typeSlice.actions.filterPlatform;
export default typeSlice.reducer;
