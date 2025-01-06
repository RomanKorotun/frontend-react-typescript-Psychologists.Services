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
import { AppointmentShema } from "../../../validationShemas/psychologistShemas";
import { IAppointment } from "../../../interfaces/appointmentsInterface";
import "react-datepicker/dist/react-datepicker.css";
import { SelectDate } from "../../DateAndTimePicker/SelectDate";
import { SelectTime } from "../../DateAndTimePicker/SelectTime/SelectTime";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";
import {
  addAppointmentForNotLoggedInUser,
  appointmentIsComplete,
} from "../../../redux/api";
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
    clientId &&
      values.date &&
      dispatch(
        addAppointmentForNotLoggedInUser({
          ...values,
          date: new Date(format(values.date, "yyyy-MM-dd")),
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
          client_name: "",
          client_phone: "",
          client_email: "",
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
                    value={values.time}
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

      <CloseModalButton onClick={handleRequestClose} />
    </CustomModalAppointment>
  );
};
