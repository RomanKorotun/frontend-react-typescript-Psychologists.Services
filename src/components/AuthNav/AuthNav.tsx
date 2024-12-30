import { FC, useState } from "react";
import { ButtonCard, ButtonLogin, ButtonRegister } from "./AuthNav.styled";
import { ModalRegister } from "../Modal/ModalRegister/ModalRegister";
import { ModalLogin } from "../Modal/ModalLogin/ModalLogin";

export const AuthNav: FC = () => {
  const [isOpenRegisterModal, setIsOpenRegisterModal] =
    useState<boolean>(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);

  const toggleLoginModal = () => {
    setIsOpenLoginModal((prevState: boolean) => !prevState);
  };

  const toggleRegisterModal = () => {
    setIsOpenRegisterModal((prevState: boolean) => !prevState);
  };

  return (
    <ButtonCard>
      <ButtonLogin onClick={toggleLoginModal}>Log In</ButtonLogin>
      <ButtonRegister onClick={toggleRegisterModal}>
        Registration
      </ButtonRegister>
      <ModalRegister
        isOpenModal={isOpenRegisterModal}
        onToggleModal={toggleRegisterModal}
      />
      <ModalLogin
        isOpenModal={isOpenLoginModal}
        onToggleModal={toggleLoginModal}
      />
    </ButtonCard>
  );
};
