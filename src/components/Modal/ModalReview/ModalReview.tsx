import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Formik, FormikProps } from "formik";
import {
  ButtonSubmit,
  CustomModalReview,
  DescriptionReviewForm,
  FieldStyled,
  FormReview,
  LabelStyled,
  TitleReviewForm,
  ErrMsg,
} from "./ModalReview.styled";
import { IModalRevievProps } from "../../../interfaces/authInterfaces";
import { ReviewShema } from "../../../validationShemas/psychologistShemas";
import { StarRatingModal } from "../../StarRating/StarRatingModal";
import { IReview } from "../../../interfaces/psychologistsInterfaces";
import { TextArea } from "../../TextArea/TextArea";
import { AppDispatch } from "../../../redux/store";
import { addReviewForLoggedInUser } from "../../../redux/api";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";

Modal.setAppElement("#root");

export const ModalReview: FC<IModalRevievProps> = ({
  id,
  isOpenModal,
  onToggleModal,
}) => {
  const [rating, setRating] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: IReview) => {
    dispatch(
      addReviewForLoggedInUser({
        id,
        rating: values.rating,
        comment: values.comment,
      })
    );
    onToggleModal();
  };

  useEffect(() => {
    return () => {
      isOpenModal && setRating(0);
    };
  }, [isOpenModal]);

  return (
    <CustomModalReview
      isOpen={isOpenModal}
      onRequestClose={onToggleModal}
      contentLabel="Example Modal"
      style={{
        overlay: {
          zIndex: 1000,
        },
        content: {
          zIndex: 1000,
        },
      }}
    >
      <Formik
        initialValues={{
          rating: 0,
          comment: "",
        }}
        validationSchema={ReviewShema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }: FormikProps<IReview>) => (
          <>
            <TitleReviewForm>Review</TitleReviewForm>
            <DescriptionReviewForm>
              Your feedback is very important to us. To improve the quality of
              our service, we invite you to rate your experience with the
              psychologist. Please leave your comments and a rating from 1 to 5.
            </DescriptionReviewForm>
            <FormReview>
              <LabelStyled>
                <StarRatingModal
                  totalStars={5}
                  onStarClick={(index) => {
                    setFieldValue("rating", index);
                    setRating(index);
                  }}
                  selectedStars={rating}
                />
                <ErrMsg component="div" name="rating" />
              </LabelStyled>

              <LabelStyled>
                <FieldStyled
                  name="comment"
                  placeholder="Comment"
                  component={TextArea}
                />
                <ErrMsg component="div" name="comment" />
              </LabelStyled>

              <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </FormReview>
          </>
        )}
      </Formik>

      <CloseModalButton onClick={onToggleModal} />
    </CustomModalReview>
  );
};
