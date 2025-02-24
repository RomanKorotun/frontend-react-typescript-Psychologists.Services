import styled from "styled-components";
import Modal from "react-modal";
import { Form } from "formik";

export const CustomModalAppointment = styled(Modal)`
  position: relative;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  border: 1px solid #71736f;
  background-color: #fbfbfb;
  transform: translate(-50%, -50%);
  overflow: auto;
  width: 280px;
  @media only screen and (max-width: 427px) {
    padding: 20px;
  }
  @media only screen and (min-width: 428px) {
    padding: 30px;
  }
`;

export const TitleAvatarUploadForm = styled.div`
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

export const FormAvatarUpload = styled(Form)`
  position: relative;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50px;
  width: 86px;
  height: 86px;
`;

export const Input = styled.input`
  display: none;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 86px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #191a15;
`;

export const ErrMsg = styled.div`
  font-size: 13px;
  white-space: nowrap;
  position: absolute;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
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
  background-color: ${({ theme }) => theme.bgColors.accentBgColor};
  border: none;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.bgColors.activeAccentBgColor};
  }
`;
