import { FC } from "react";
import { ButtonCloseModal, CloseIcon } from "./CloseModalButton.styled";

interface ICloseModalButtonProps {
  onClick: () => void;
}

export const CloseModalButton: FC<ICloseModalButtonProps> = ({ onClick }) => {
  return (
    <ButtonCloseModal onClick={onClick}>
      <CloseIcon />
    </ButtonCloseModal>
  );
};
