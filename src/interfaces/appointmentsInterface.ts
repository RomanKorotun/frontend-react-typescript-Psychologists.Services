export interface IAppointment {
  psychologistId: string;
  clientId: string;
  client_name: string;
  client_phone: string;
  client_email: string;
  // comment: string;
  // date: Date | null;
  date: string | null;
  time: string;
}

interface ITimeSlot {
  time: string;
  isReserved: boolean;
  clientId: string | null;
}

export interface IAppointmentsState {
  selectedDate: string | null;
  reservedTimes: ITimeSlot[];
  clientId: string | null;
}

export interface IResponseGetReservedTimeForDay
  extends Pick<IAppointmentsState, "reservedTimes"> {}

export interface IResponseAddReservedTimeForDay {
  psychologistId: string;
  clientId: string;
  date: Date | null;
  time: string;
  isReserved: boolean;
}

export interface ISetSelectedDate {
  date: string | null;
}

export interface IGetReservedTimesForDay
  extends Pick<IAppointment, "psychologistId" | "date"> {}

export interface IgetAppointmentForNotLoggedInUser
  extends Pick<IResponseAddReservedTimeForDay, "clientId"> {}

export interface IaddReservedTimesForDay
  extends Pick<IAppointment, "psychologistId" | "time"> {
  // date: Date;
  date: string;
  clientId: string;
}
