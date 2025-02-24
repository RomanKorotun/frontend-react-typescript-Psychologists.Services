export interface IAppointment {
  psychologistId: string;
  clientId: string;
  client_name: string;
  client_phone: string;
  client_email: string;
  date: string | null;
  time: string;
}

export interface IAppointmentForLoggedInUser
  extends Pick<
    IAppointment,
    "psychologistId" | "clientId" | "client_phone" | "date" | "time"
  > {}

interface ITimeSlot {
  time: string;
  isReserved: boolean;
  clientId: string | null;
}

export interface IResponseGetAppointmentsForLoggedInUser {
  _id: string;
  date: string;
  time: string;
  psychologistId: {
    _id: string;
    avatar_url: string;
    name: string;
    price_per_hour: string;
    rating: string;
  };
}

export interface IResponseGetAppointmentForLoggedInUser {
  _id: string;
  date: string;
  time: string;
  meetingLink: string;
  psychologistId: {
    _id: string;
    name: string;
  };
}

export interface IAppointmentsState {
  loading: boolean;
  error: boolean;
  selectedDate: string | null;
  reservedTimes: ITimeSlot[];
  clientId: string | null;
  appointmentsList: IResponseGetAppointmentsForLoggedInUser[];
  appointment: null | IResponseGetAppointmentForLoggedInUser;
  paymentInfo: string;
  paymentSignature: string;
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

export interface IAddReservedTimesForDay
  extends Pick<IAppointment, "psychologistId" | "time"> {
  date: string;
  clientId: string;
}

export interface ICreatePayment {
  amount: number;
  currency: string;
  description: string;
  orderId: string;
}

export interface IResponseCreatePayment {
  data: string;
  signature: string;
}
