import { RootState } from "../store";

export const reservedTimesSelector = (state: RootState) =>
  state.appointments.reservedTimes;
export const selectedDateSelector = (state: RootState) =>
  state.appointments.selectedDate;
export const clientIdSelector = (state: RootState) =>
  state.appointments.clientId;
