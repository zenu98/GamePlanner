import { configureStore } from "@reduxjs/toolkit";
import typeReducer from "./types";
import GameDataReducer from "./gameData";

export const store = configureStore({
  reducer: {
    filteredGames: typeReducer,
    gameData: GameDataReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
