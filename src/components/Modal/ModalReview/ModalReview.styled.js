import styled from "styled-components";
import Modal from "react-modal";
import { Field, Form, ErrorMessage } from "formik";

export const CustomModalReview = styled(Modal)`
  position: relative;
  z-index: 10000;
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
    width: 450px;
  }
`;

export const TitleReviewForm = styled.div`
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

export const DescriptionReviewForm = styled.p`
  @media only screen and (max-width: 427px) {
    font-size: 12px;
  }
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 14px;
`;

export const FormReview = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 14px;
`;

export const FieldStyled = styled(Field)`
  min-height: 100px;
  resize: none;
  border: 1px solid #e9eae9;
  border-radius: 12px;
  padding-top: 12px;
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
