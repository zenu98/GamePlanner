import { createSlice } from "@reduxjs/toolkit";
import { platform, genres } from "../data/category";
import { PlatForm, Genre } from "../data/model";
import { RootState } from "./store";

interface stateType {
  platforms: PlatForm;
  genres: Genre[];
}

const initialState: stateType = {
  platforms: platform,
  genres: genres,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
});

export default gamesSlice.reducer;
export const selectPlatform = (state: RootState) =>
  state.gameData.platforms.platform;
