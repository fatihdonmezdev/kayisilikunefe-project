import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer, {
  loadFavoritesFromLocalStorage,
} from "./FavoriteSlice";
export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer,
  },
});

store.dispatch(loadFavoritesFromLocalStorage());
