import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserRegister, IUserLogin } from "../interfaces/authInterfaces";
import {
  IAllPpsychologists,
  IAllPpsychologistsFavorite,
  IParamsId,
} from "../interfaces/psychologistsInterfaces";
import { RootState } from "./store";
import { IReview } from "../interfaces/reviewsInterface";
import {
  IAddReservedTimesForDay,
  IAppointment,
  IAppointmentForLoggedInUser,
  ICreatePayment,
  IgetAppointmentForNotLoggedInUser,
  IGetReservedTimesForDay,
} from "../interfaces/appointmentsInterface";

const { REACT_APP_BASE_URL_BACKEND } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL_BACKEND;

const setAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

// =============================auth=================================

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

export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (data: FormData, thunkApi) => {
    try {
      const response = await axios.put("/api/auth/avatar", data);
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

// =============================/auth=================================

// =============================psychologists========================

export const psychologistsFotNotLoggedInUser = createAsyncThunk(
  "psychologists/psychologistsFotNotLoggedInUser",
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

export const psychologistsForLoggedInUser = createAsyncThunk(
  "psychologists/psychologistsForLoggedInUser",
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

// =============================/psychologists========================

// =============================review================================
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

// =============================/review================================

// =============================appointment============================

export const addAppointmentForNotLoggedInUser = createAsyncThunk(
  "appointment/addAppointmentForNotLoggedInUser",
  async (appointment: IAppointment, thunkApi) => {
    try {
      await axios.post("/api/not-loggedin/appointments", appointment);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addAppointmentForLoggedInUser = createAsyncThunk(
  "appointment/addAppointmentForLoggedInUser",
  async (appointment: IAppointmentForLoggedInUser, thunkApi) => {
    try {
      await axios.post("/api/loggedin/appointments", appointment);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAppointmentsForLoggedInUser = createAsyncThunk(
  "appointment/getAppointmentsForLoggedInUser",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/api/loggedin/appointments");
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAppointmentForLoggedInUser = createAsyncThunk(
  "appointment/getAppointmentForLoggedInUser",
  async (id: string, thunkApi) => {
    try {
      const response = await axios.get(`/api/loggedin/appointments/${id}/one`);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const appointmentIsComplete = createAsyncThunk(
  "appointment/appointmentIsComplete",
  async ({ clientId }: IgetAppointmentForNotLoggedInUser, thunkApi) => {
    try {
      const response = await axios.get(
        `/api/not-loggedin/appointments/${clientId}`
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getReservedTimesForDay = createAsyncThunk(
  "appointment/getReservedTimesForDay",
  async ({ psychologistId, date }: IGetReservedTimesForDay, thunkApi) => {
    try {
      const response = await axios.get(
        `/api/reserved-times/${psychologistId}/${date}`
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addReservedTimesForDay = createAsyncThunk(
  "appointment/addReservedTimesForDay",
  async (data: IAddReservedTimesForDay, thunkApi) => {
    try {
      await axios.post(`/api/reserved-times`, data);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createPayment = createAsyncThunk(
  "appointment/createPayment",
  async (data: ICreatePayment, thunkApi) => {
    try {
      const response = await axios.post("/api/create-payment", data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// =============================/appointment============================
