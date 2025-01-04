interface IPsychologistsItem {
  _id: string;
  name: string;
  avatar_url: string;
  experience: string;
  reviews?: {
    _id: string;
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
  owner?: string[];
}

export interface IPsychologistsState {
  items: IPsychologistsItem[];
  oneItem: IPsychologistsItem | null;
  favoriteItems: IPsychologistsItem[];
  clearFavoriteItem: boolean;
  filter: string | null;
  page: number;
  pageFavorite: number;
  pagesQuantity: number;
  pagesFavoriteQuantity: number;
  loading: boolean;
  error: boolean;
}

export interface IPage {
  page: number;
}

export interface IFilter {
  filter: string | null;
}

export interface IResponsePsychologistsItem extends IPsychologistsItem {}

// export interface IResponsePsychologistsItem {
//   _id: string;
//   name: string;
//   avatar_url: string;
//   experience: string;
//   reviews?: {
//     _id: string;
//     reviewer: string;
//     rating: number;
//     comment: string;
//   }[];
//   price_per_hour: number;
//   rating: number;
//   license: string;
//   specialization: string;
//   initial_consultation: string;
//   about: string;
//   owner?: string[];
// }

export interface IItemProps {
  item: IResponsePsychologistsItem;
}

export interface IResponsePsychologists {
  items: IResponsePsychologistsItem[];
  pagesQuintity: number;
}

export interface IPsychologistListProps
  extends Omit<IResponsePsychologists, "pagesQuintity"> {}

export interface IAllPpsychologists {
  page: number;
  limit?: number;
  params?: string | undefined;
}

export interface IAllPpsychologistsFavorite
  extends Omit<IAllPpsychologists, "page"> {
  pageFavorite: number;
}

export interface IParamsId {
  id: string;
}

export interface IStarRatingModal {
  totalStars: number;
  onStarClick: (index: number) => void;
  selectedStars: number;
}

export interface IStarRatingComment
  extends Omit<IStarRatingModal, "onStarClick"> {}

export interface IReview {
  id?: string;
  rating: number;
  comment: string;
}

export interface IAppointment {
  psychologistId: string;
  clientId: string;
  client_name: string;
  client_phone: string;
  client_email: string;
  // comment: string;
  date: Date | null;
  time: string;
}

interface ITimeSlot {
  time: string;
  isReserved: boolean;
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
  date: string;
  time: string;
  iReserved: boolean;
}

export interface ISetSelectedDate {
  date: string | null;
}

export interface IGetReservedTimesForDay
  extends Pick<IAppointment, "psychologistId" | "date"> {}

export interface IaddReservedTimesForDay
  extends Pick<IAppointment, "psychologistId" | "time"> {
  date: string;
  clientId: string;
}

export interface ISvgStarProps {
  $isFilled?: boolean;
}
