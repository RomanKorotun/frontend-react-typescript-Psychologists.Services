import styled from "styled-components";
import Modal from "react-modal";
import { Field, Form, ErrorMessage } from "formik";

export const CustomModalAppointment = styled(Modal)`
  position: relative;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  border: 1px solid #71736f;
  background-color: #fbfbfb;
  transform: translate(-50%, -50%);
  overflow: auto;
  width: 90%;
  @media only screen and (max-width: 427px) {
    padding: 20px;
  }
  @media only screen and (min-width: 428px) {
    padding: 30px;
  }
  @media only screen and (min-width: 470px) {
    width: 420px;
  }
`;

export const TitleAppointmentForm = styled.div`
  font-weight: 500;
  font-size: 26px;
  @media only screen and (min-width: 428px) {
    font-size: 30px;
  }
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #191a15;
  margin-bottom: 14px;
`;

export const DescriptionAppointmentForm = styled.p`
  @media only screen and (max-width: 427px) {
    font-size: 12px;
  }
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 14px;
`;

export const PsychologistCard = styled.div`
  display: flex;
  gap: 14px;
`;

export const PsychologistAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
  margin-bottom: 14px;
`;

export const LabelName = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #8a8a89;
  margin-bottom: 4px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #191a15;
`;

export const FormAppointment = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const WrapperField = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const WrapperDateAndTime = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 14px;
`;

export const WrapperDateField = styled.div`
  position: relative;
  .react-datepicker__input-container input {
    border: 1px solid #e9eae9;
    border-radius: 12px;
    padding-left: 12px;
    height: 38px;
    width: 100%;
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: #191a15;
    }
  }
  /* .react-datepicker__time-list-item--disabled {
    display: none !important;
  } */
`;

export const WrapperTimeField = styled.div`
  position: relative;
`;

export const FieldStyled = styled(Field)`
  border: 1px solid #e9eae9;
  border-radius: 12px;
  padding-left: 12px;
  height: 38px;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #191a15;
  }
`;

export const TextAreaStyled = styled(Field)`
  display: block;
  min-height: 70px;
  resize: none;
  border: 1px solid #e9eae9;
  border-radius: 12px;
  padding-top: 12px;
  padding-left: 12px;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #191a15;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 13px;
  position: absolute;
  bottom: -14px;
  left: 5px;
  color: #eb4c42;
`;

export const ButtonSubmit = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border-radius: 30px;
  background-color: #54be96;
  border: none;
`;
