import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getReservedTimesForDay } from "../api";
import {
  IAppointmentsState,
  IResponseAddReservedTimeForDay,
  IResponseGetReservedTimeForDay,
  ISetSelectedDate,
} from "../../interfaces/appointmentsInterface";

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
      console.log("action", action);
      state.clientId = action.payload;
    },
    setAddReservedTimesForDay: (
      state,
      action: PayloadAction<IResponseAddReservedTimeForDay>
    ) => {
      const { time, isReserved, clientId } = action.payload;
      state.reservedTimes = state.reservedTimes.map((slot) => {
        if (slot.clientId === clientId) {
          return { ...slot, isReserved: false, clientId: null };
        }
        if (slot.time === time) {
          return { ...slot, isReserved: isReserved, clientId: clientId };
        }
        return slot;
      });
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
