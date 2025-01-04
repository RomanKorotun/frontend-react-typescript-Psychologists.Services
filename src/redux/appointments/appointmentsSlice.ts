import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppointmentsState,
  IResponseAddReservedTimeForDay,
  IResponseGetReservedTimeForDay,
  ISetSelectedDate,
} from "../../interfaces/psychologistsInterfaces";
import { getReservedTimesForDay } from "../api";

const initialState: IAppointmentsState = {
  selectedDate: null,
  reservedTimes: [],
  clientId: null,
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<ISetSelectedDate>) => {
      state.selectedDate = action.payload.date;
    },
    setClientId: (state, action: PayloadAction<string | null>) => {
      state.clientId = action.payload;
    },
    setAddReservedTimesForDay: (
      state,
      action: PayloadAction<IResponseAddReservedTimeForDay>
    ) => {
      state.reservedTimes = state.reservedTimes.map((slot) =>
        slot.time === action.payload.time
          ? { ...slot, isReserved: true }
          : { ...slot, isReserved: false }
      );
    },
  },
  extraReducers: (build) =>
    build.addCase(
      getReservedTimesForDay.fulfilled,
      (state, action: PayloadAction<IResponseGetReservedTimeForDay>) => {
        state.reservedTimes = action.payload.reservedTimes;
      }
    ),
});

export const appointmentsReducer = appointmentsSlice.reducer;

export const { setSelectedDate, setClientId, setAddReservedTimesForDay } =
  appointmentsSlice.actions;
