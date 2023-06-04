export type CatType = {
  id: string;
  name: string;
  temperament: string;
  description: string;
};

export type CatsInitialState = {
  cats: CatType[];
  favorites: CatType[];
  isLoading: boolean;
  error?: string;
};

export type CatsState = {
  cats: {
    cats: CatType[];
    favorites: CatType[];
    isLoading: boolean;
    error?: string;
  };
};
