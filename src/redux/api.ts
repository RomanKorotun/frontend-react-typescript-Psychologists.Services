import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserRegister, IUserLogin } from "../interfaces/authInterfaces";
import {
  IAllPpsychologists,
  IAllPpsychologistsFavorite,
  IParamsId,
  IReview,
} from "../interfaces/psychologistsInterfaces";
import { RootState } from "./store";

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

const setAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (user: IUserRegister, thunkApi) => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signout",
  async (user: IUserLogin, thunkApi) => {
    try {
      const response = await axios.post("/api/auth/signin", user);
      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk("auth/current", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState() as RootState;
    const persistAccessToken = state.auth.accessToken;
    if (persistAccessToken === null) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }
    setAuthToken(persistAccessToken);
    const response = await axios.get("/api/auth/current");
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunlApi) => {
  try {
    await axios.post("/api/auth/logout");
    clearAuthToken();
  } catch (error: any) {
    return thunlApi.rejectWithValue;
  }
});

export const psychologistsNotLoggedIn = createAsyncThunk(
  "psychologists/psychologistsNotLoggedIn",
  async ({ page, limit = 3, params }: IAllPpsychologists, thunkApi) => {
    let url = `/api/not-loggedin/psychologists?page=${page}&limit=${limit}`;
    if (params && params !== "standard=all") {
      url += `&${params}`;
    }
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const psychologistsLoggedIn = createAsyncThunk(
  "psychologists/psychologistsLoggedIn",
  async ({ page, limit = 3, params }: IAllPpsychologists, thunkApi) => {
    let url = `/api/loggedin/psychologists?page=${page}&limit=${limit}`;
    if (params && params !== "standard=all") {
      url += `&${params}`;
    }
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updatePsychologistsCardLoggedIn = createAsyncThunk(
  "psychologists/updatePsychologistsCardLoggedIn",
  async ({ id }: IParamsId, thunkApi) => {
    try {
      const response = await axios.put(
        `/api/loggedin/psychologists/${id}/favorite`
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const psychologistsFavorite = createAsyncThunk(
  "psychologists/psychologistsFavorite",
  async (
    { pageFavorite: page, limit = 3, params }: IAllPpsychologistsFavorite,
    thunkApi
  ) => {
    let url = `/api/psychologists/favorite?page=${page}&limit=${limit}`;
    if (params && params !== "standard=all") {
      url += `&${params}`;
    }
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updatePsychologistsCardFavoriteLoggedIn = createAsyncThunk(
  "psychologists/updatePsychologistsCardFavoriteLoggedIn",
  async ({ id }: IParamsId, thunkApi) => {
    try {
      const response = await axios.put(
        `/api/loggedin/psychologists/${id}/favorite`
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOnePsychologistForNotLoggedInUser = createAsyncThunk(
  "psychologists/getOnePsychologistForNotLoggedInUser",
  async ({ id }: IParamsId, thunkApi) => {
    try {
      const response = await axios.get(`/api/not-loggedin/psychologists/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOnePsychologistForLoggedInUser = createAsyncThunk(
  "psychologists/getOnePsychologistForLoggedInUser",
  async ({ id }: IParamsId, thunkApi) => {
    try {
      const response = await axios.get(`/api/loggedin/psychologists/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addReviewForLoggedInUser = createAsyncThunk(
//   "psychologists/addReviewForLoggedInUser",
//   async ({ id, ...reviews }: IReview, thunkApi) => {
//     try {
//       const response = await axios.post(
//         `/api/loggedin/psychologists/${id}/reviews`,
//         reviews
//       );
//       return response.data;
//     } catch (error: any) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const addReviewForLoggedInUser = createAsyncThunk(
  "psychologists/addReviewForLoggedInUser",
  async ({ id, ...reviews }: IReview, thunkApi) => {
    try {
      await axios.post(`/api/loggedin/psychologists/${id}/reviews`, reviews);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
