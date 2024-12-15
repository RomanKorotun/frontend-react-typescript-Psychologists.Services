import sprite from "../../images/icons.svg";
import { ButtonBurgerStyled } from "./MobileHeader.styled";
import { FC, useState } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Logo } from "../Logo/Logo";

export const MobileHeader: FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const handleActiveBurger = (): void => {
    setIsActiveBurger((pS) => !pS);
  };

  return (
    <>
      <Logo />
      <ButtonBurgerStyled onClick={handleActiveBurger}>
        <svg width={32} height={32}>
          <use href={`${sprite}#burger-icon`} />
        </svg>
      </ButtonBurgerStyled>
      {isActiveBurger && (
        <BurgerMenu onHandleActiveBurger={handleActiveBurger} />
      )}
    </>
  );
};
