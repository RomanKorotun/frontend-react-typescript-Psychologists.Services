import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Formik } from "formik";
import {
  ButtonCloseModal,
  ButtonSubmit,
  CustomModalAppointment,
  DescriptionAppointmentForm,
  FieldStyled,
  FormAppointment,
  LabelStyled,
  TitleAppointmentForm,
  ErrMsg,
  TextAreaStyled,
  PsychologistAvatar,
  PsychologistCard,
  LabelName,
  Name,
} from "./ModalAppointment.styled";
import sprite from "../../../images/icons.svg";
import { IModalAppointmentProps } from "../../../interfaces/authInterfaces";
import { AppDispatch } from "../../../redux/store";
import { AppointmentShema } from "../../../validationShemas/psychologistShemas";
import { IAppointment } from "../../../interfaces/psychologistsInterfaces";
import { TextArea } from "../../TextArea/TextArea";

Modal.setAppElement("#root");

export const ModalAppointment: FC<IModalAppointmentProps> = ({
  avatar,
  name,
  isOpenModal,
  onToggleModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (values: IAppointment) => {};

  return (
    <CustomModalAppointment
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
          name: "",
          phone: "+380",
          email: "",
          comment: "",
        }}
        validationSchema={AppointmentShema}
        onSubmit={handleSubmit}
      >
        <>
          <TitleAppointmentForm>Appointment</TitleAppointmentForm>
          <DescriptionAppointmentForm>
            Fill out the short form below to book your personal appointment with
            a professional psychologist.
          </DescriptionAppointmentForm>

          <PsychologistCard>
            <PsychologistAvatar src={avatar} alt="avatar" />
            <div>
              <LabelName>Your psychologist</LabelName>
              <Name>{name}</Name>
            </div>
          </PsychologistCard>

          <FormAppointment>
            <LabelStyled>
              <FieldStyled name="name" placeholder="Name" />
              <ErrMsg component="div" name="name" />
            </LabelStyled>

            <LabelStyled>
              <FieldStyled name="phone" />
              <ErrMsg component="div" name="phone" />
            </LabelStyled>

            <LabelStyled>
              <FieldStyled name="email" type="email" placeholder="Email" />
              <ErrMsg component="div" name="email" />
            </LabelStyled>

            <LabelStyled>
              <TextAreaStyled
                name="comment"
                placeholder="Comment"
                component={TextArea}
              />
              <ErrMsg component="div" name="comment" />
            </LabelStyled>

            <ButtonSubmit type="submit">Send</ButtonSubmit>
          </FormAppointment>
        </>
      </Formik>

      <ButtonCloseModal onClick={onToggleModal}>
        <svg width={32} height={32}>
          <use href={`${sprite}#close-icon`} />
        </svg>
      </ButtonCloseModal>
    </CustomModalAppointment>
  );
};
