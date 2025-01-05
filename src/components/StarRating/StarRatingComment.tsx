import { FC } from "react";
import { IStarRatingComment } from "../../interfaces/reviewsInterface";
import sprite from "../../images/icons.svg";
import { SvgStar } from "./StarRating.styles";

export const StarRatingComment: FC<IStarRatingComment> = ({
  totalStars,
  selectedStars,
}) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <SvgStar
          key={index}
          fill={index < selectedStars ? "#ffc531" : "#fbfbfb"}
        >
          <use href={`${sprite}#star-icon`} />
        </SvgStar>
      ))}
    </div>
  );
};
