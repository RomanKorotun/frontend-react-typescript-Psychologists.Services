import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Formik } from "formik";
import {
  ButtonSubmit,
  CustomModalLogin,
  DescriptionLoginForm,
  FieldStyled,
  FormLogin,
  LabelStyled,
  TitleLoginForm,
  ErrMsg,
  Error,
} from "./ModalLogin.styled";
import { IModalProps, IUserLogin } from "../../../interfaces/authInterfaces";
import { AppDispatch } from "../../../redux/store";
import { signin } from "../../../redux/api";
import {
  resetPsychologistsState,
  setFilter,
} from "../../../redux/psychologists/psychologistsSlice";
import { LoginSchema } from "../../../validationShemas/authShemas";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";
import { useAuth } from "../../../hooks/useAuth";
import { clearModalError } from "../../../redux/auth/authSlice";
import { Loader } from "../../Loader/Loader";

Modal.setAppElement("#root");

export const ModalLogin: FC<IModalProps> = ({ isOpenModal, onToggleModal }) => {
  const { error, email, loading } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (values: IUserLogin) => {
    dispatch(signin(values));
    dispatch(resetPsychologistsState());
    dispatch(setFilter({ filter: "Default" }));
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

  useEffect(() => {
    if (!isOpenModal) {
      dispatch(clearModalError());
    }
  }, [dispatch, isOpenModal]);

  return (
    <CustomModalLogin
      isOpen={isOpenModal}
      onRequestClose={onToggleModal}
      contentLabel="Login Modal"
      style={modalStyles}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <>
          {loading && <Loader />}
          <TitleLoginForm>Log In</TitleLoginForm>
          <DescriptionLoginForm>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </DescriptionLoginForm>
          <FormLogin>
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

            <ButtonSubmit type="submit">Log In</ButtonSubmit>
            {error && <Error>Email or password is wrong!</Error>}
          </FormLogin>
        </>
      </Formik>

      <CloseModalButton onClick={onToggleModal} />
    </CustomModalLogin>
  );
};
