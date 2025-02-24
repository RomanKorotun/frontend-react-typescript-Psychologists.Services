import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Formik } from "formik";
import {
  ButtonSubmit,
  CustomModalRegister,
  DescriptionRegisterForm,
  ErrMsg,
  Error,
  FieldStyled,
  FormRegister,
  LabelStyled,
  TitleRegisterForm,
} from "./ModalRegister.styled";
import { AppDispatch } from "../../../redux/store";
import { signup } from "../../../redux/api";
import { IModalProps, IUserRegister } from "../../../interfaces/authInterfaces";
import { resetPsychologistsState } from "../../../redux/psychologists/psychologistsSlice";
import { RegisterSchema } from "../../../validationShemas/authShemas";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";
import { useAuth } from "../../../hooks/useAuth";
import { Loader } from "../../Loader/Loader";

Modal.setAppElement("#root");

export const ModalRegister: FC<IModalProps> = ({
  isOpenModal,
  onToggleModal,
}) => {
  const { error, email, loading } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (values: IUserRegister) => {
    dispatch(signup(values));
    dispatch(resetPsychologistsState());
    navigate("/psychologists");
  };

  if (email) {
    onToggleModal();
  }

  const modalStyles = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      zIndex: 1000,
    },
  };

  return (
    <CustomModalRegister
      isOpen={isOpenModal}
      onRequestClose={onToggleModal}
      contentLabel="Register Modal"
      style={modalStyles}
    >
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <>
          {loading && <Loader />}
          <TitleRegisterForm>Registration</TitleRegisterForm>
          <DescriptionRegisterForm>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </DescriptionRegisterForm>
          <FormRegister>
            <LabelStyled>
              <FieldStyled name="username" placeholder="Name" />
              <ErrMsg component="div" name="username" />
            </LabelStyled>
            <LabelStyled>
              <FieldStyled name="email" type="email" placeholder="Email" />
              <ErrMsg component="div" name="email" />
            </LabelStyled>
            <LabelStyled>
              <FieldStyled
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrMsg component="div" name="password" />
            </LabelStyled>

            <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
            {error && <Error>Email in use!</Error>}
          </FormRegister>
        </>
      </Formik>

      <CloseModalButton onClick={onToggleModal} />
    </CustomModalRegister>
  );
};
