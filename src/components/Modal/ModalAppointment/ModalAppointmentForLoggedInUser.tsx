import { FC } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Formik } from "formik";
import { format } from "date-fns";
import {
  ButtonSubmit,
  CustomModalAppointment,
  DescriptionAppointmentForm,
  FieldStyled,
  FormAppointment,
  TitleAppointmentForm,
  ErrMsg,
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
import { AppointmentForLoggedInUserShema } from "../../../validationShemas/psychologistShemas";
import { IAppointmentForLoggedInUser } from "../../../interfaces/appointmentsInterface";
import "react-datepicker/dist/react-datepicker.css";
import { SelectDate } from "../../DateAndTimePicker/SelectDate";
import { SelectTime } from "../../DateAndTimePicker/SelectTime/SelectTime";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";
import {
  addAppointmentForLoggedInUser,
  appointmentIsComplete,
  createPayment,
} from "../../../redux/api";
import { setClientId } from "../../../redux/appointments/appointmentsSlice";
import { useAppointments } from "../../../hooks/useAppointments";

Modal.setAppElement("#root");

export const ModalAppointmentForLoggedInUser: FC<IModalAppointmentProps> = ({
  id,
  avatar,
  name,
  isOpenModal,
  price_per_hour,
  onToggleModal,
}) => {
  const { clientId } = useAppointments();

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: IAppointmentForLoggedInUser) => {
    clientId &&
      dispatch(
        createPayment({
          amount: price_per_hour,
          currency: "USD",
          description: "Test payment",
          orderId: clientId,
        })
      );
    clientId &&
      values.date &&
      dispatch(
        addAppointmentForLoggedInUser({
          ...values,
          date: format(values.date, "yyyy-MM-dd"),
          clientId,
        })
      );
    dispatch(setClientId(null));
    onToggleModal();
  };

  const handleRequestClose = () => {
    clientId && dispatch(appointmentIsComplete({ clientId }));
    dispatch(setClientId(null));
    onToggleModal();
  };

  const modalStyles = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      zIndex: 1000,
    },
  };

  return (
    <CustomModalAppointment
      isOpen={isOpenModal}
      onRequestClose={handleRequestClose}
      contentLabel="Appointment Modal"
      style={modalStyles}
    >
      <Formik
        initialValues={{
          psychologistId: id,
          clientId: "",
          client_phone: "",
          date: null,
          time: "",
        }}
        validationSchema={AppointmentForLoggedInUserShema}
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
                <FieldStyled name="client_phone" placeholder="Phone" />
                <ErrMsg component="div" name="client_phone" />
              </WrapperField>

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
                    value={values.time}
                    setFieldValue={setFieldValue}
                  />
                  <ErrMsg component="div" name="time" />
                </WrapperTimeField>
              </WrapperDateAndTime>

              <ButtonSubmit type="submit">Send</ButtonSubmit>

              <div style={{ fontSize: "10px", marginTop: "5px", color: "red" }}>
                Картка для тестової оплати - 4242424242424242
              </div>
              <div style={{ fontSize: "10px", color: "red" }}>
                Термін дії - будь-яка дата
              </div>
              <div style={{ fontSize: "10px", color: "red" }}>
                CVV2 - будь-які цифри
              </div>
            </FormAppointment>
          </>
        )}
      </Formik>

      <CloseModalButton onClick={handleRequestClose} />
    </CustomModalAppointment>
  );
};
