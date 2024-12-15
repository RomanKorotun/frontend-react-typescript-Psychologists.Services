import { RootState } from "../store";

export const itemsSelector = (state: RootState) => state.psychologists.items;
export const favoriteItemsSelector = (state: RootState) =>
  state.psychologists.favoriteItems;
export const clearFavoriteItemSelector = (state: RootState) =>
  state.psychologists.clearFavoriteItem;
export const filterSelector = (state: RootState) => state.psychologists.filter;
export const pagesQuantitySelector = (state: RootState) =>
  state.psychologists.pagesQuantity;
export const pagesFavoriteQuantitySelector = (state: RootState) =>
  state.psychologists.pagesQuantity;
export const pageSelector = (state: RootState) => state.psychologists.page;
export const pageFavoriteSelector = (state: RootState) =>
  state.psychologists.pageFavorite;
export const loadingSelector = (state: RootState) =>
  state.psychologists.loading;
export const errorSelector = (state: RootState) => state.psychologists.error;
