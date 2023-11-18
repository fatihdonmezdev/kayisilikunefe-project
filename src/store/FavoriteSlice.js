import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      if (typeof window !== "undefined") {
        const currentFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        let updatedFavorites;
        if (currentFavorites.find((item) => item.id === action.payload.id)) {
          updatedFavorites = currentFavorites.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          updatedFavorites = [...currentFavorites, action.payload];
        }
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        state.favorite = updatedFavorites;
      }
    },
    loadFavoritesFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        state.favorite = storedFavorites;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavorite, loadFavoritesFromLocalStorage } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
