import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  psychologistsFavorite,
  psychologistsForLoggedInUser,
  psychologistsFotNotLoggedInUser,
  updatePsychologistsCardLoggedIn,
  updatePsychologistsCardFavoriteLoggedIn,
  getOnePsychologistForNotLoggedInUser,
  getOnePsychologistForLoggedInUser,
} from "../api";

import {
  IPsychologistsState,
  IPage,
  IFilter,
  IResponsePsychologists,
  IResponsePsychologistsItem,
  IResponseAddNewReview,
  IResponseNewAvatarForComment,
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

const pendingAction = (state: IPsychologistsState) => {
  state.error = false;
  state.loading = true;
};

const rejectedAction = (state: IPsychologistsState) => {
  state.error = true;
  state.loading = false;
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
    setNewReview: (state, action: PayloadAction<IResponseAddNewReview>) => {
      state.oneItem = state.oneItem
        ? {
            ...state.oneItem,
            rating: action.payload.rating,
            reviews: state.oneItem.reviews
              ? [...state.oneItem.reviews, ...action.payload.reviews]
              : state.oneItem.reviews,
          }
        : state.oneItem;

      state.items = state.items.map((el) => {
        if (el._id === action.payload._id) {
          return { ...el, rating: action.payload.rating };
        }
        return el;
      });
    },
    setNewAvatarForComment: (
      state,
      action: PayloadAction<IResponseNewAvatarForComment>
    ) => {
      const { psychologistsIds, userId, newAvatar } = action.payload;
      if (state.oneItem?._id && psychologistsIds.includes(state.oneItem._id)) {
        const updatedReviews = state.oneItem.reviews?.map((review) => {
          if (review.clientId === userId) {
            return {
              ...review,
              avatar: newAvatar,
            };
          }
          return review;
        });
        return {
          ...state,
          oneItem: {
            ...state.oneItem,
            reviews: updatedReviews,
          },
        };
      }
      return state;
    },
  },
  extraReducers: (build) =>
    build
      .addCase(psychologistsFotNotLoggedInUser.pending, pendingAction)
      .addCase(
        psychologistsFotNotLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.pagesQuantity = action.payload.pagesQuintity;
          state.items = action.payload.items;
        }
      )
      .addCase(psychologistsFotNotLoggedInUser.rejected, rejectedAction)
      .addCase(psychologistsForLoggedInUser.pending, pendingAction)
      .addCase(
        psychologistsForLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.items = action.payload.items;
          state.pagesQuantity = action.payload.pagesQuintity;
        }
      )
      .addCase(psychologistsForLoggedInUser.rejected, rejectedAction)
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
      .addCase(psychologistsFavorite.pending, pendingAction)
      .addCase(
        psychologistsFavorite.fulfilled,
        (state, action: PayloadAction<IResponsePsychologists>) => {
          state.loading = false;
          state.pagesQuantity = action.payload.pagesQuintity;
          state.favoriteItems = action.payload.items;
        }
      )
      .addCase(psychologistsFavorite.rejected, rejectedAction)
      .addCase(
        updatePsychologistsCardFavoriteLoggedIn.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.favoriteItems = state.favoriteItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
      )
      .addCase(getOnePsychologistForNotLoggedInUser.pending, pendingAction)
      .addCase(
        getOnePsychologistForNotLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.loading = false;
          state.oneItem = action.payload;
        }
      )
      .addCase(getOnePsychologistForNotLoggedInUser.rejected, rejectedAction)
      .addCase(getOnePsychologistForLoggedInUser.pending, pendingAction)
      .addCase(
        getOnePsychologistForLoggedInUser.fulfilled,
        (state, action: PayloadAction<IResponsePsychologistsItem>) => {
          state.loading = false;
          state.oneItem = action.payload;
        }
      )
      .addCase(getOnePsychologistForLoggedInUser.rejected, rejectedAction),
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
  setNewAvatarForComment,
} = psychologistsSlice.actions;
