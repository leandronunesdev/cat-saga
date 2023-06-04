import { createSlice } from "@reduxjs/toolkit";
import { CatsInitialState } from "../../constants/genericTypes";

const initialState: CatsInitialState = {
  cats: [],
  favorites: [],
  isLoading: false,
  error: undefined,
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
      state.error = undefined;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    addToFavorites: (state, action) => {
      const { id } = action.payload;
      const alreadyFavorite = state.favorites.find((item) => item.id === id);
      if (alreadyFavorite) {
        const updatedFavorites = state.favorites.filter(
          (item) => item.id !== id
        );
        state.favorites = updatedFavorites;
        return;
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure, addToFavorites } =
  catSlice.actions;
export default catSlice.reducer;
