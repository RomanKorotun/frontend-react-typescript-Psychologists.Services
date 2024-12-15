import styled from "styled-components";
import Modal from "react-modal";
import { Field, Form, ErrorMessage } from "formik";

export const CustomModalLogin = styled(Modal)`
  position: relative;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  border: 1px solid #71736f;
  background-color: #fbfbfb;
  transform: translate(-50%, -50%);
  overflow: auto;
  padding: 64px;
  width: 95%;
  @media only screen and (max-width: 427px) {
    padding: 34px;
  }
  @media only screen and (min-width: 428px) and (max-width: 594px) {
    padding: 44px;
  }
  @media only screen and (min-width: 595px) {
    width: 565px;
  }
`;

export const TitleLoginForm = styled.div`
  font-weight: 500;
  font-size: 26px;
  @media only screen and (min-width: 428px) {
    font-size: 40px;
  }
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #191a15;
  margin-bottom: 20px;
`;

export const DescriptionLoginForm = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
`;

export const FormLogin = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const FieldStyled = styled(Field)`
  border: 1px solid #e9eae9;
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  height: 52px;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #191a15;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -18px;
  left: 0;
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

export const ButtonCloseModal = styled.button`
  background-color: transparent;
  border: none;
  stroke: currentColor;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;
