import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  signup,
  current,
  logout,
  signin,
  psychologistsForLoggedInUser,
  psychologistsFavorite,
  updatePsychologistsCardLoggedIn,
  updateAvatar,
} from "../api";
import {
  IAuthResponse,
  IResponseCurrent,
  IAuthState,
  IResponceUpdateAvatar,
} from "../../interfaces/authInterfaces";

const initialState: IAuthState = {
  username: null,
  email: null,
  avatar: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearModalError: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signup.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        signup.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.loading = false;
          state.isLoggedIn = true;
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.avatar = action.payload.avatar;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
        }
      )
      .addCase(signup.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signin.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        signin.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.loading = false;
          state.isLoggedIn = true;
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.avatar = action.payload.avatar;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
        }
      )
      .addCase(signin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(current.pending, (state) => {
        state.error = false;
        state.isRefreshing = true;
      })
      .addCase(
        current.fulfilled,
        (state, action: PayloadAction<IResponseCurrent>) => {
          state.isRefreshing = false;
          state.isLoggedIn = true;
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.avatar = action.payload.avatar;
        }
      )
      .addCase(current.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.username = null;
        state.email = null;
        state.avatar = null;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.username = null;
        state.email = null;
        state.avatar = null;
      })
      .addCase(psychologistsForLoggedInUser.rejected, (state) => {
        state.isLoggedIn = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.username = null;
        state.email = null;
        state.avatar = null;
      })
      .addCase(updatePsychologistsCardLoggedIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.username = null;
        state.email = null;
        state.avatar = null;
      })
      .addCase(psychologistsFavorite.rejected, (state) => {
        state.isLoggedIn = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.username = null;
        state.email = null;
        state.avatar = null;
      })
      .addCase(
        updateAvatar.fulfilled,
        (state, action: PayloadAction<IResponceUpdateAvatar>) => {
          state.avatar = action.payload.avatar;
        }
      ),
});

export const authReducer = authSlice.reducer;

export const { clearModalError } = authSlice.actions;
