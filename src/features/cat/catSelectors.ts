import { CatsState } from "../../constants/genericTypes";

export const getCats = (state: CatsState) => state.cats.cats;
export const getLoading = (state: CatsState) => state.cats.isLoading;
export const getErrors = (state: CatsState) => state.cats.error;
export const getFavorites = (state: CatsState) => state.cats.favorites;
