import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { psychologistsReducer } from "./psychologists/psychologistsSlice";
import { appointmentsReducer } from "./appointments/appointmentsSlice";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken", "isLoggedIn"],
};

const persistPsychologistsConfig = {
  key: "psychologists",
  storage,
  whitelist: ["filter", "page"],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedPsychologistsReducer = persistReducer(
  persistPsychologistsConfig,
  psychologistsReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    psychologists: persistedPsychologistsReducer,
    appointments: appointmentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
