import { FC } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Formik } from "formik";
import {
  ButtonSubmit,
  CustomModalAppointment,
  DescriptionAppointmentForm,
  FieldStyled,
  FormAppointment,
  TitleAppointmentForm,
  ErrMsg,
  TextAreaStyled,
  PsychologistAvatar,
  PsychologistCard,
  LabelName,
  Name,
  WrapperField,
  WrapperDateField,
  WrapperDateAndTime,
  WrapperTimeField,
} from "./ModalAppointment.styled";
import { IModalAppointmentProps } from "../../../interfaces/authInterfaces";
import { AppDispatch } from "../../../redux/store";
import { AppointmentShema } from "../../../validationShemas/psychologistShemas";
import { IAppointment } from "../../../interfaces/psychologistsInterfaces";
import { TextArea } from "../../TextArea/TextArea";
import "react-datepicker/dist/react-datepicker.css";
import { SelectDate } from "../../DateAndTimePicker/SelectDate";
import { SelectTime } from "../../DateAndTimePicker/SelectTime/SelectTime";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";
import { addAppointmentForNotLoggedInUser } from "../../../redux/api";
import { setClientId } from "../../../redux/appointments/appointmentsSlice";
import { useAppointments } from "../../../hooks/useAppointments";

Modal.setAppElement("#root");

export const ModalAppointment: FC<IModalAppointmentProps> = ({
  id,
  avatar,
  name,
  isOpenModal,
  onToggleModal,
}) => {
  const { clientId } = useAppointments();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: IAppointment) => {
    dispatch(addAppointmentForNotLoggedInUser(values));
    dispatch(setClientId(null));
    onToggleModal();
  };

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
          psychologistId: id,
          clientId: clientId || "",
          client_name: "",
          client_phone: "",
          client_email: "",
          // comment: "",
          date: null,
          time: "",
        }}
        validationSchema={AppointmentShema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <>
            <TitleAppointmentForm>Appointment</TitleAppointmentForm>
            <DescriptionAppointmentForm>
              Fill out the short form below to book your personal appointment
              with a professional psychologist.
            </DescriptionAppointmentForm>

            <PsychologistCard>
              <PsychologistAvatar src={avatar} alt="avatar" />
              <div>
                <LabelName>Your psychologist</LabelName>
                <Name>{name}</Name>
              </div>
            </PsychologistCard>

            <FormAppointment>
              <WrapperField>
                <FieldStyled name="client_name" placeholder="Name" />
                <ErrMsg component="div" name="client_name" />
              </WrapperField>

              <WrapperField>
                <FieldStyled name="client_phone" placeholder="Phone" />
                <ErrMsg component="div" name="client_phone" />
              </WrapperField>

              <WrapperField>
                <FieldStyled
                  name="client_email"
                  type="email"
                  placeholder="Email"
                />
                <ErrMsg component="div" name="client_email" />
              </WrapperField>

              {/* <WrapperField>
                <TextAreaStyled
                  name="comment"
                  placeholder="Comment"
                  component={TextArea}
                />
                <ErrMsg component="div" name="comment" />
              </WrapperField> */}

              <WrapperDateAndTime>
                <WrapperDateField>
                  <SelectDate
                    psychologistId={id}
                    selected={values.date}
                    setFieldValue={setFieldValue}
                  />
                  <ErrMsg component="div" name="date" />
                </WrapperDateField>

                <WrapperTimeField>
                  <SelectTime
                    psychologistId={id}
                    value={values.time || ""}
                    setFieldValue={setFieldValue}
                  />
                  <ErrMsg component="div" name="time" />
                </WrapperTimeField>
              </WrapperDateAndTime>

              <ButtonSubmit type="submit">Send</ButtonSubmit>
            </FormAppointment>
          </>
        )}
      </Formik>

      <CloseModalButton onClick={onToggleModal} />
    </CustomModalAppointment>
  );
};
