import { RootState } from "../store";

export const reservedTimesSelector = (state: RootState) =>
  state.appointments.reservedTimes;
export const selectedDateSelector = (state: RootState) =>
  state.appointments.selectedDate;
export const clientIdSelector = (state: RootState) =>
  state.appointments.clientId;
export const appointmentsListSelector = (state: RootState) =>
  state.appointments.appointmentsList;
export const appointmentSelector = (state: RootState) =>
  state.appointments.appointment;
export const loadingSelector = (state: RootState) => state.appointments.loading;
export const paymentInfoSelector = (state: RootState) =>
  state.appointments.paymentInfo;
export const paymentSignatureSelector = (state: RootState) =>
  state.appointments.paymentSignature;
