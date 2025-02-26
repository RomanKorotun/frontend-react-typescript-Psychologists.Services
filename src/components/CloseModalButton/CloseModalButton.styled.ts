import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

export const ButtonCloseModal = styled.button`
  @media only screen and (max-width: 427px) {
    top: 12px;
    right: 12px;
  }
  padding: 0;
  background-color: transparent;
  border: none;
  stroke: currentColor;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const CloseIcon = styled(IoCloseSharp)`
  width: 32px;
  height: 32px;
`;
