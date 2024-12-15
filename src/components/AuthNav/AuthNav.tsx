import { FC, useState } from "react";
import { ButtonCard, ButtonLogin, ButtonRegister } from "./AuthNav.styled";
import { ModalRegister } from "../Modal/ModalRegister/ModalRegister";
import { ModalLogin } from "../Modal/ModalLogin/ModalLogin";

export const AuthNav: FC = () => {
  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState<boolean>(false);
  const [isOpenLoginForm, setIsOpenLoginForm] = useState<boolean>(false);

  const toggleModalLogin = () => {
    setIsOpenLoginForm((pS: boolean) => !pS);
  };

  const toggleModalRegister = () => {
    setIsOpenRegisterForm((pS: boolean) => !pS);
  };

  return (
    <ButtonCard>
      <ButtonLogin onClick={toggleModalLogin}>Log In</ButtonLogin>
      <ButtonRegister onClick={toggleModalRegister}>
        Registration
      </ButtonRegister>
      <ModalRegister
        isOpenModal={isOpenRegisterForm}
        onToggleModal={toggleModalRegister}
      />
      <ModalLogin
        isOpenModal={isOpenLoginForm}
        onToggleModal={toggleModalLogin}
      />
    </ButtonCard>
  );
};
