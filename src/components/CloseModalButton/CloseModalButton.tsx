import { FC } from "react";
import sprite from "../../images/icons.svg";
import { ButtonCloseModal } from "./CloseModalButton.styled";

interface ICloseModalButtonProps {
  onClick: () => void;
}

export const CloseModalButton: FC<ICloseModalButtonProps> = ({ onClick }) => {
  return (
    <ButtonCloseModal onClick={onClick}>
      <svg width={32} height={32}>
        <use href={`${sprite}#close-icon`} />
      </svg>
    </ButtonCloseModal>
  );
};
