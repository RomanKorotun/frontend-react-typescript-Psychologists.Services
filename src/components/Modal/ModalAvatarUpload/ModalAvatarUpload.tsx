import { ChangeEvent, FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { Formik } from "formik";
import {
  ButtonSubmit,
  CustomModalAppointment,
  FormAvatarUpload,
  TitleAvatarUploadForm,
  ErrMsg,
  Avatar,
  AddIcon,
  AddButton,
  Input,
} from "./ModalAvatarUpload.styled";
import {
  IAvatarUpload,
  IModalAvatarUploadProps,
} from "../../../interfaces/authInterfaces";
import { AppDispatch } from "../../../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import { CloseModalButton } from "../../CloseModalButton/CloseModalButton";
import { AvatarUploadSchema } from "../../../validationShemas/authShemas";
import { updateAvatar } from "../../../redux/api";

Modal.setAppElement("#root");

export const ModalAvatarUpload: FC<IModalAvatarUploadProps> = ({
  avatar: userPhoto,
  isOpenModal,
  onToggleModal,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      setFieldValue("avatar", file);
    }
  };

  const handleSubmit = (values: IAvatarUpload) => {
    const { avatar } = values;
    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar);
      dispatch(updateAvatar(formData));
    }
    setPreviewImage(null);
    onToggleModal();
  };

  const handleClickAdd = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const handleRequestClose = () => {
    setPreviewImage(null);
    onToggleModal();
  };

  const modalStyles = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      zIndex: 1000,
    },
  };

  return (
    <CustomModalAppointment
      isOpen={isOpenModal}
      onRequestClose={handleRequestClose}
      contentLabel="AvatarUpload Modal"
      style={modalStyles}
    >
      <Formik
        initialValues={{
          avatar: null,
        }}
        validationSchema={AvatarUploadSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
      >
        {({ setFieldValue, errors }) => (
          <>
            <TitleAvatarUploadForm>Edit avatar</TitleAvatarUploadForm>

            <FormAvatarUpload>
              <Avatar src={previewImage || userPhoto} alt="userphoto" />
              <div>
                <Input
                  ref={fileInputRef}
                  name="avatar"
                  type="file"
                  onChange={(event) => handleFileChange(event, setFieldValue)}
                />
                <AddButton onClick={handleClickAdd} type="button">
                  <AddIcon />
                </AddButton>
                {errors.avatar && <ErrMsg>{errors.avatar}</ErrMsg>}
              </div>

              <ButtonSubmit type="submit">Send</ButtonSubmit>
            </FormAvatarUpload>
          </>
        )}
      </Formik>

      <CloseModalButton onClick={handleRequestClose} />
    </CustomModalAppointment>
  );
};
