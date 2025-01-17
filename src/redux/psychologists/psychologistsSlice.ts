import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  psychologistsFavorite,
  psychologistsForLoggedInUser,
  psychologistsFotNotLoggedInUser,
  updatePsychologistsCardLoggedIn,
  updatePsychologistsCardFavoriteLoggedIn,
  getOnePsychologistForNotLoggedInUser,
  getOnePsychologistForLoggedInUser,
  addReviewForLoggedInUser,
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
  oneItem: null,
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
    setNewReview: (
      state,
      action: PayloadAction<IResponsePsychologistsItem>
    ) => {
      state.oneItem = action.payload;
      state.items = state.items.map((el) => {
        if (el._id === action.payload._id) {
          return action.payload;
        }
        return el;
      });
    },
  },
  extraReducers: (build) =>
    build
      .addCase(psychologistsFotNotLoggedInUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        psychologistsFotNotLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.pagesQuantity = action.payload.pagesQuintity;
          state.items = action.payload.items;
        }
      )
      .addCase(psychologistsFotNotLoggedInUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(psychologistsForLoggedInUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        psychologistsForLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.items = action.payload.items;
          state.pagesQuantity = action.payload.pagesQuintity;
        }
      )
      .addCase(psychologistsForLoggedInUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(
        updatePsychologistsCardLoggedIn.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.oneItem = action.payload;
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
      )
      .addCase(getOnePsychologistForNotLoggedInUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        getOnePsychologistForNotLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.loading = false;
          state.oneItem = action.payload;
        }
      )
      .addCase(getOnePsychologistForNotLoggedInUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getOnePsychologistForLoggedInUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        getOnePsychologistForLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.loading = false;
          state.oneItem = action.payload;
        }
      )
      .addCase(getOnePsychologistForLoggedInUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  // .addCase(
  //   addReviewForLoggedInUser.fulfilled,
  //   (state, action: PayloadAction<IResponsePsychologistsItem>) => {
  //     state.oneItem = action.payload;
  //     state.items = state.items.map((el) => {
  //       if (el._id === action.payload._id) {
  //         return action.payload;
  //       }
  //       return el;
  //     });
  //   }
  // ),
});

export const psychologistsReducer = psychologistsSlice.reducer;
export const {
  setPage,
  setFilter,
  setPageFavorite,
  resetPsychologistsState,
  resetPsychologistsFavoriteState,
  setClearFavoriteItem,
  setNewReview,
} = psychologistsSlice.actions;
