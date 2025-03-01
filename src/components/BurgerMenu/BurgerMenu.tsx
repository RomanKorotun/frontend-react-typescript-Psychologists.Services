import { FC } from "react";
import sprite from "../../images/icons.svg";
import { BurgerMenuContainer, ButtonBurgerClose } from "./BurgerMenu.styled";
import { NavMenu } from "../NavMenu/NavMenu";
import { AuthNav } from "../AuthNav/AuthNav";

interface IBurgerMenuProps {
  onHandleActiveBurger: () => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = () => {
  return (
    <BurgerMenuContainer>
      <ButtonBurgerClose>
        <svg width={32} height={32}>
          <use href={`${sprite}#modal-close-icon`} />
        </svg>
      </ButtonBurgerClose>
      <NavMenu />
      <AuthNav />
    </BurgerMenuContainer>
  );
};
