import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createPayment,
  getAppointmentForLoggedInUser,
  getAppointmentsForLoggedInUser,
  getReservedTimesForDay,
} from "../api";
import {
  IAppointmentsState,
  IResponseAddReservedTimeForDay,
  IResponseCreatePayment,
  IResponseGetAppointmentForLoggedInUser,
  IResponseGetAppointmentsForLoggedInUser,
  IResponseGetReservedTimeForDay,
  ISetSelectedDate,
} from "../../interfaces/appointmentsInterface";

const initialState: IAppointmentsState = {
  selectedDate: null,
  reservedTimes: [],
  clientId: null,
  appointmentsList: [],
  appointment: null,
  loading: true,
  error: false,
  paymentInfo: "",
  paymentSignature: "",
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
    setResetPaymentInfoAndSignature: (state) => {
      state.paymentInfo = "";
      state.paymentSignature = "";
    },
  },
  extraReducers: (build) =>
    build
      .addCase(
        getReservedTimesForDay.fulfilled,
        (state, action: PayloadAction<IResponseGetReservedTimeForDay>) => {
          state.reservedTimes = action.payload.reservedTimes;
        }
      )
      .addCase(getAppointmentsForLoggedInUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        getAppointmentsForLoggedInUser.fulfilled,
        (
          state,
          action: PayloadAction<IResponseGetAppointmentsForLoggedInUser[]>
        ) => {
          state.loading = false;
          state.appointmentsList = action.payload;
        }
      )
      .addCase(getAppointmentsForLoggedInUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(
        createPayment.fulfilled,
        (state, action: PayloadAction<IResponseCreatePayment>) => {
          state.paymentInfo = action.payload.data;
          state.paymentSignature = action.payload.signature;
        }
      )
      .addCase(getAppointmentForLoggedInUser.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        getAppointmentForLoggedInUser.fulfilled,
        (
          state,
          action: PayloadAction<IResponseGetAppointmentForLoggedInUser>
        ) => {
          state.loading = false;
          state.appointment = action.payload;
        }
      )
      .addCase(getAppointmentForLoggedInUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const appointmentsReducer = appointmentsSlice.reducer;

export const {
  setSelectedDate,
  setClientId,
  setAddReservedTimesForDay,
  setResetPaymentInfoAndSignature,
} = appointmentsSlice.actions;
