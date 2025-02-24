import { FC, useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Avatar, User, UserMenuCard } from "./UserMenu.styled";
import { ModalAvatarUpload } from "../Modal/ModalAvatarUpload/ModalAvatarUpload";
import { PersonalMenu } from "../PersonalMenu/PersonalMenu";

export const UserMenu: FC = () => {
  const [isOpenAvatarUploadModal, setIsOpenAvatarUploadModal] =
    useState<boolean>(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const nameRef = useRef<HTMLParagraphElement | null>(null);

  const { avatar, username } = useAuth();

  const toggleAvatarUploadModal = () => {
    setIsOpenAvatarUploadModal((prevState: boolean) => !prevState);
  };

  const toggleVisibleMenu = () => {
    setIsVisibleMenu((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef?.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        nameRef?.current &&
        !nameRef.current.contains(event.target as Node)
      ) {
        setIsVisibleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <UserMenuCard>
        <User>
          <p
            ref={nameRef}
            onClick={toggleVisibleMenu}
            style={{ cursor: "pointer" }}
          >
            {username}
          </p>
          {avatar && (
            <Avatar
              src={avatar}
              alt="userfoto"
              onClick={toggleAvatarUploadModal}
            />
          )}
        </User>
        {isVisibleMenu && (
          <PersonalMenu
            ref={dropdownRef}
            onToggleVisibleMenu={toggleVisibleMenu}
          />
        )}
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
