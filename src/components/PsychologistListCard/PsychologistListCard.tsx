import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
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
  SvgStar,
  ReviewList,
  ReviewerAvatar,
  ReviewerCard,
  ReviewerName,
  ReviewerComment,
  ButtonAction,
  InfoWrapper,
  RatingPriceWrapper,
  ButtonWrapper,
  NotFoundMessage,
  ReviewerDate,
} from "./PsychologistListCard.styled";
import sprite from "../../images/icons.svg";
import { useAuth } from "../../hooks/useAuth";
import { AppDispatch } from "../../redux/store.ts";
import {
  updatePsychologistsCardFavoriteLoggedIn,
  updatePsychologistsCardLoggedIn,
} from "../../redux/api.ts";
import { usePsychologists } from "../../hooks/usePsychologists.ts";
import {
  setClearFavoriteItem,
  setNewAvatarForComment,
  setNewReview,
} from "../../redux/psychologists/psychologistsSlice.ts";
import { IItemProps } from "../../interfaces/psychologistsInterfaces.ts";
import { ModalReview } from "../Modal/ModalReview/ModalReview.tsx";
import { useLocation } from "react-router-dom";
import { StarRatingComment } from "../StarRating/StarRatingComment.tsx";
import { ModalAppointmentForNotLoggedInUser } from "../Modal/ModalAppointment/ModalAppointmentForNotLoggedInUser..tsx";
import { ModalAppointmentForLoggedInUser } from "../Modal/ModalAppointment/ModalAppointmentForLoggedInUser.tsx";
import { useSocket } from "../../contexts/SocketContext.tsx";
import { useAppointments } from "../../hooks/useAppointments.ts";
import { setResetPaymentInfoAndSignature } from "../../redux/appointments/appointmentsSlice.ts";

export const PsychologistListCard: FC<IItemProps> = ({ item }) => {
  const [isOpenReviewModal, setIsOpenReviewModal] = useState<boolean>(false);
  const [isOpenModalAppointment, setIsOpenModalAppointment] =
    useState<boolean>(false);
  const { favoriteItems } = usePsychologists();
  const { isLoggedIn } = useAuth();
  const { paymentInfo, paymentSignature } = useAppointments();

  const formRef = useRef<HTMLFormElement>(null);

  const socket = useSocket();

  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const toggleAppointmentModal = () => {
    setIsOpenModalAppointment((prevState: boolean) => !prevState);
  };

  const toggleReviewModal = () => {
    setIsOpenReviewModal((prevState: boolean) => !prevState);
  };

  const handleClickAppointment = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggleAppointmentModal();
  };

  const handleClickReview = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggleReviewModal();
  };

  const handleSvgClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
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

  const isCurrentPsychologistPage =
    location.pathname === `/psychologist/${item._id}`;

  const messageForLoggedInUsers =
    "There are no comments yet. Be the first to share your thoughts!";

  const messageForNotLoggedInUsers =
    "There are no comments yet. To leave a comment, please log in!";

  useEffect(() => {
    if (socket) {
      socket.on("newReview", (review) => {
        dispatch(setNewReview(review));
      });
      return () => {
        socket.off("newReview");
      };
    }
  }, [dispatch, socket]);

  useEffect(() => {
    if (socket) {
      socket.on("updateAvatarForComment", (newAvatarForComment) => {
        dispatch(setNewAvatarForComment(newAvatarForComment));
      });
      return () => {
        socket.off("updateAvatarForComment");
      };
    }
  }, [dispatch, socket]);

  useEffect(() => {
    if (formRef.current && paymentInfo && paymentSignature) {
      formRef.current.submit();
      dispatch(setResetPaymentInfoAndSignature());
    }
  }, [dispatch, paymentInfo, paymentSignature, formRef]);

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
          <SvgStar width={16} height={16} $isFilled={item.rating > 0}>
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

      {isCurrentPsychologistPage && <About>{item.about}</About>}
      {!isCurrentPsychologistPage && (
        <About>{item.about.slice(0, 200)} ...</About>
      )}

      {isCurrentPsychologistPage && (
        <ButtonWrapper>
          <ButtonAction onClick={handleClickAppointment}>
            Make an appointment
          </ButtonAction>
          {isLoggedIn && (
            <ButtonAction onClick={handleClickReview}>
              Leave a Review
            </ButtonAction>
          )}
        </ButtonWrapper>
      )}

      {isCurrentPsychologistPage &&
        item?.reviews &&
        item.reviews.length > 0 && (
          <ReviewList>
            {item.reviews
              .map((review, index) => (
                <li key={index}>
                  <ReviewerCard>
                    <ReviewerAvatar src={review.avatar} />
                    <div>
                      <ReviewerDate>
                        {format(new Date(review.date), "dd.MM.yyyy")}
                      </ReviewerDate>
                      <ReviewerName>{review.reviewer}</ReviewerName>
                      <StarRatingComment
                        totalStars={5}
                        selectedStars={review.rating}
                      />
                    </div>
                  </ReviewerCard>
                  <ReviewerComment>{review.comment}</ReviewerComment>
                </li>
              ))
              .reverse()}
          </ReviewList>
        )}

      {isCurrentPsychologistPage &&
        item?.reviews &&
        item.reviews.length === 0 && (
          <NotFoundMessage>
            {isLoggedIn ? messageForLoggedInUsers : messageForNotLoggedInUsers}
          </NotFoundMessage>
        )}

      {!isLoggedIn && (
        <ModalAppointmentForNotLoggedInUser
          id={item._id}
          avatar={item.avatar_url}
          name={item.name}
          price_per_hour={item.price_per_hour}
          isOpenModal={isOpenModalAppointment}
          onToggleModal={toggleAppointmentModal}
        />
      )}

      {isLoggedIn && (
        <ModalAppointmentForLoggedInUser
          id={item._id}
          avatar={item.avatar_url}
          name={item.name}
          price_per_hour={item.price_per_hour}
          isOpenModal={isOpenModalAppointment}
          onToggleModal={toggleAppointmentModal}
        />
      )}

      {isLoggedIn && (
        <ModalReview
          id={item._id}
          isOpenModal={isOpenReviewModal}
          onToggleModal={toggleReviewModal}
        />
      )}
      <form
        ref={formRef}
        method="POST"
        action="https://www.liqpay.ua/api/3/checkout"
      >
        <input type="hidden" name="data" value={paymentInfo} />
        <input type="hidden" name="signature" value={paymentSignature} />
      </form>
    </>
  );
};
