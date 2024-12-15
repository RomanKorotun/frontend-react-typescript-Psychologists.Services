interface IPsychologistsItems {
  _id: string;
  name: string;
  avatar_url: string;
  experience: string;
  reviews: {
    _id: string;
    reviewer: string;
    rating: string;
    comment: string;
  }[];
  price_per_hour: string;
  rating: string;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export interface IPsychologistsState {
  items: IPsychologistsItems[];
  favoriteItems: IPsychologistsItems[];
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

export interface IResponsePsychologistsItem {
  _id: string;
  name: string;
  avatar_url: string;
  experience: string;
  reviews: {
    _id: string;
    reviewer: string;
    rating: string;
    comment: string;
  }[];
  price_per_hour: string;
  rating: string;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
  owner?: string[];
}

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

export interface IFavoriteCardAction {
  id: string;
}
