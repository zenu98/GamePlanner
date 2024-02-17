import { createSlice } from "@reduxjs/toolkit";
import { platform } from "../data/dummy-data";
import { ListOfGames, category } from "../data/dummy-data";
const gamesSlice = createSlice({
  name: "games",
  initialState: {
    datas: ListOfGames,
    platforms: platform,
    category: category,
  },
  reducers: {},
});

export default gamesSlice.reducer;
