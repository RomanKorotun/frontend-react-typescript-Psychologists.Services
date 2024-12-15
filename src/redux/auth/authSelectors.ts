import { RootState } from "../store";

export const usernameSelector = (state: RootState) => state.auth.username;
export const emailSelector = (state: RootState) => state.auth.email;
export const avatarSelector = (state: RootState) => state.auth.avatar;
export const accessTokenSelector = (state: RootState) => state.auth.accessToken;
export const refreshTokenSelector = (state: RootState) =>
  state.auth.refreshToken;
export const isLoggeddInSelector = (state: RootState) => state.auth.isLoggedIn;
export const isRefreshingSelector = (state: RootState) =>
  state.auth.isRefreshing;
export const loadingSelector = (state: RootState) => state.auth.loading;
export const errorSelector = (state: RootState) => state.auth.error;
