import styled from "styled-components";
import Modal from "react-modal";
import { Field, Form, ErrorMessage } from "formik";

export const CustomModalLogin = styled(Modal)`
  position: relative;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  border: 1px solid #71736f;
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor};
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
    width: 450px;
  }
`;

export const TitleLoginForm = styled.div`
  font-weight: 500;
  font-size: 26px;
  @media only screen and (min-width: 428px) {
    font-size: 30px;
  }
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 14px;
`;

export const DescriptionLoginForm = styled.p`
  @media only screen and (max-width: 427px) {
    font-size: 12px;
  }
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 14px;
`;

export const FormLogin = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 14px;
`;

export const FieldStyled = styled(Field)`
  border: 1px solid ${({ theme }) => theme.colors.fieldFormColor};
  border-radius: 12px;
  padding-left: 12px;
  height: 38px;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 13px;
  position: absolute;
  bottom: -14px;
  left: 5px;
  color: ${({ theme }) => theme.colors.errorColor};
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
  background-color: ${({ theme }) => theme.bgColors.accentBgColor};
  border: none;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.bgColors.activeAccentBgColor};
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -18px;
  left: 5px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.errorColor};
`;
