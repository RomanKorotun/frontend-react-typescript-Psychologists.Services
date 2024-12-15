import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  psychologistsFavorite,
  psychologistsLoggedIn,
  psychologistsNotLoggedIn,
  updatePsychologistsCardLoggedIn,
  updatePsychologistsCardFavoriteLoggedIn,
} from "../api";

import {
  IPsychologistsState,
  IPage,
  IFilter,
  IResponsePsychologists,
  IResponsePsychologistsItem,
} from "../../interfaces/psychologistsInterfaces";

const initialState: IPsychologistsState = {
  items: [],
  favoriteItems: [],
  clearFavoriteItem: false,
  filter: "Default",
  page: 1,
  pageFavorite: 1,
  pagesQuantity: 1,
  pagesFavoriteQuantity: 1,
  loading: false,
  error: false,
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {
    resetPsychologistsState: (state) => {
      state.page = 1;
      state.pagesQuantity = 0;
      state.items = [];
    },
    resetPsychologistsFavoriteState: (state) => {
      state.pageFavorite = 1;
      state.pagesQuantity = 0;
      state.favoriteItems = [];
    },
    setPage: (state, action: PayloadAction<IPage>) => {
      state.page = action.payload.page;
    },
    setPageFavorite: (state, action: PayloadAction<IPage>) => {
      state.pageFavorite = action.payload.page;
    },
    setClearFavoriteItem: (state) => {
      state.clearFavoriteItem = !state.clearFavoriteItem;
    },
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (build) =>
    build
      .addCase(psychologistsNotLoggedIn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        psychologistsNotLoggedIn.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.pagesQuantity = action.payload.pagesQuintity;
          state.items = action.payload.items;
        }
      )
      .addCase(psychologistsNotLoggedIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(psychologistsLoggedIn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        psychologistsLoggedIn.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.items = action.payload.items;
          state.pagesQuantity = action.payload.pagesQuintity;
        }
      )
      .addCase(psychologistsLoggedIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(
        updatePsychologistsCardLoggedIn.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.items = state.items.map((el) => {
            if (el._id === action.payload._id) {
              return action.payload;
            }
            return el;
          });
        }
      )
      .addCase(psychologistsFavorite.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        psychologistsFavorite.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.pagesQuantity = action.payload.pagesQuintity;
          state.favoriteItems = action.payload.items;
        }
      )
      .addCase(psychologistsFavorite.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(
        updatePsychologistsCardFavoriteLoggedIn.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.favoriteItems = state.favoriteItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
      ),
});

export const psychologistsReducer = psychologistsSlice.reducer;
export const {
  setPage,
  setFilter,
  setPageFavorite,
  resetPsychologistsState,
  resetPsychologistsFavoriteState,
  setClearFavoriteItem,
} = psychologistsSlice.actions;
