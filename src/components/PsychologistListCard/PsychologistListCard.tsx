import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  Img,
  ImgCard,
  Profession,
  Rating,
  Delimiter,
  Price,
  PriceAccent,
  ButtonSvg,
  RatingPriceFavoriteWrapper,
  SvgHeart,
  Title,
  List,
  ListItem,
  ListItemAccent,
  About,
  ButtonReadMore,
  SvgStar,
  ReviewList,
  ReviewerAvatar,
  ReviewerCard,
  ReviewerName,
  RatingCard,
  ReviewerComment,
  ButtonMakeAppointment,
  InfoWrapper,
  RatingPriceWrapper,
} from "./PsychologistListCard.styled";
import sprite from "../../images/icons.svg";
import { useAuth } from "../../hooks/useAuth";
import { AppDispatch } from "../../redux/store.ts";
import {
  updatePsychologistsCardFavoriteLoggedIn,
  updatePsychologistsCardLoggedIn,
} from "../../redux/api.ts";
import { usePsychologists } from "../../hooks/usePsychologists.ts";
import { setClearFavoriteItem } from "../../redux/psychologists/psychologistsSlice.ts";
import { IItemProps } from "../../interfaces/psychologistsInterfaces.ts";

export const PsychologistListCard: FC<IItemProps> = ({ item }) => {
  const { favoriteItems } = usePsychologists();
  const dispatch = useDispatch<AppDispatch>();
  const [showMore, setShowMore] = useState<boolean>(true);
  const { isLoggedIn } = useAuth();

  const handleSvgClick = () => {
    if (!isLoggedIn) {
      toast.error("This functionality is available only for authorized users!");
      return;
    }
    if (favoriteItems.length > 0) {
      dispatch(setClearFavoriteItem());
      dispatch(updatePsychologistsCardFavoriteLoggedIn({ id: item._id }));
    } else {
      dispatch(updatePsychologistsCardLoggedIn({ id: item._id }));
    }
  };

  return (
    <>
      <InfoWrapper>
        <ImgCard>
          <Img src={item.avatar_url} alt="avatar" />
        </ImgCard>
        <div>
          <Profession>Psychologist</Profession>
          <Title>{item.name}</Title>
        </div>
      </InfoWrapper>
      <RatingPriceFavoriteWrapper>
        <RatingPriceWrapper>
          <SvgStar width={16} height={16}>
            <use href={`${sprite}#star-icon`} />
          </SvgStar>
          <Rating>Rating: {item.rating}</Rating>
          <Delimiter>|</Delimiter>
          <Price>
            Price / 1 hour: <PriceAccent>{item.price_per_hour}$</PriceAccent>
          </Price>
        </RatingPriceWrapper>
        <ButtonSvg onClick={handleSvgClick}>
          <SvgHeart $owner={item.owner} width={23} height={20}>
            <use href={`${sprite}#heart-icon`} />
          </SvgHeart>
        </ButtonSvg>
      </RatingPriceFavoriteWrapper>
      <List>
        <ListItem>
          Experience: <ListItemAccent>{item.experience}</ListItemAccent>
        </ListItem>
        <ListItem>
          License: <ListItemAccent>{item.license}</ListItemAccent>
        </ListItem>
        <ListItem>
          Specialization: <ListItemAccent>{item.specialization}</ListItemAccent>
        </ListItem>
        <ListItem>
          Initial_consultation:{" "}
          <ListItemAccent>{item.initial_consultation}</ListItemAccent>
        </ListItem>
      </List>
      <About>{item.about}</About>
      {!showMore && (
        <>
          <ReviewList>
            {item.reviews.map((review) => (
              <li key={review._id}>
                <ReviewerCard>
                  <ReviewerAvatar>{review.reviewer.slice(0, 1)}</ReviewerAvatar>
                  <div>
                    <ReviewerName>{review.reviewer}</ReviewerName>
                    <RatingCard>
                      <svg width={16} height={16}>
                        <use href={`${sprite}#star-icon`} />
                      </svg>
                      <span>{review.rating}</span>
                    </RatingCard>
                  </div>
                </ReviewerCard>
                <ReviewerComment>{review.comment}</ReviewerComment>
              </li>
            ))}
          </ReviewList>
          <ButtonMakeAppointment>Make an appointment</ButtonMakeAppointment>
        </>
      )}

      <ButtonReadMore onClick={() => setShowMore((prevState) => !prevState)}>
        {showMore ? "Show more" : "Show less"}
      </ButtonReadMore>
    </>
  );
};
