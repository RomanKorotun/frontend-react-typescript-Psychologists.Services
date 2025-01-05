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
