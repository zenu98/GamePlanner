import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface stateType {
  type: string;
  platform: string;
  platformType: string;
  tagModal: boolean;
  genre: string;
}

const initialState: stateType = {
  type: "all",
  platform: "PC",
  platformType: "PC",
  tagModal: false,
  genre: "전체",
};

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    filterGenre: (state, action: PayloadAction<{ genre: string }>) => {
      state.genre = action.payload.genre;
    },
    filterPlatform: (state, action: PayloadAction<{ platform: string }>) => {
      state.platform = action.payload.platform;
    },
    setModal: (state) => {
      state.tagModal = !state.tagModal;
    },
    setPlatform: (state, action: PayloadAction<{ platformType: string }>) => {
      state.platformType = action.payload.platformType;
    },
  },
});

export const { filterGenre, filterPlatform, setModal, setPlatform } =
  typeSlice.actions;
export default typeSlice.reducer;
export const currentPlatform = (state: RootState) =>
  state.filteredGames.platform;
export const setModalOption = (state: RootState) =>
  state.filteredGames.tagModal;
export const setGameType = (state: RootState) => state.filteredGames.genre;
export const setPlatformType = (state: RootState) =>
  state.filteredGames.platformType;
