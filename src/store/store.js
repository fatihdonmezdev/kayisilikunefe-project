import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer, {
  loadFavoritesFromLocalStorage,
} from "./FavoriteSlice";
import authReducer from './SignSlice';
export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer,
    auth: authReducer,
  },
});


store.dispatch(loadFavoritesFromLocalStorage());
