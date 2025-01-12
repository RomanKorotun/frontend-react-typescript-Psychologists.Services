import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Avatar, Button, User, UserMenuCard } from "./UserMenu.styled";
import { AppDispatch } from "../../redux/store";
import { logout } from "../../redux/api";
import {
  resetPsychologistsFavoriteState,
  resetPsychologistsState,
  setFilter,
} from "../../redux/psychologists/psychologistsSlice";
import { ModalAvatarUpload } from "../Modal/ModalAvatarUpload/ModalAvatarUpload";

export const UserMenu: FC = () => {
  const [isOpenAvatarUploadModal, setIsOpenAvatarUploadModal] =
    useState<boolean>(false);
  const { avatar, username } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const toggleAvatarUploadModal = () => {
    setIsOpenAvatarUploadModal((prevState: boolean) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setFilter({ filter: "Default" }));
    dispatch(resetPsychologistsState());
    dispatch(resetPsychologistsFavoriteState());
    navigate("/psychologists");
  };

  return (
    <>
      <UserMenuCard>
        <User>
          {avatar && (
            <Avatar
              src={avatar}
              alt="userfoto"
              onClick={toggleAvatarUploadModal}
            />
          )}
          <p>{username}</p>
        </User>
        <Button onClick={handleLogout}>Log out</Button>
      </UserMenuCard>

      {avatar && (
        <ModalAvatarUpload
          avatar={avatar}
          isOpenModal={isOpenAvatarUploadModal}
          onToggleModal={toggleAvatarUploadModal}
        />
      )}
    </>
  );
};
