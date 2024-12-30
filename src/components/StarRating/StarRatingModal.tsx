import { FC } from "react";
import { IStarRatingModal } from "../../interfaces/psychologistsInterfaces";
import sprite from "../../images/icons.svg";
import { SvgStar } from "./StarRating.styles";

export const StarRatingModal: FC<IStarRatingModal> = ({
  totalStars,
  onStarClick,
  selectedStars,
}) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <SvgStar
          key={index}
          onClick={() => onStarClick(index + 1)}
          fill={index < selectedStars ? "#ffc531" : "#fbfbfb"}
        >
          <use href={`${sprite}#star-icon`} />
        </SvgStar>
      ))}
    </div>
  );
};
