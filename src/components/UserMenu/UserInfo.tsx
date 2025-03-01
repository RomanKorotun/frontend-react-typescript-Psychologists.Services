import { FC, useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Avatar,
  AvatarWrapper,
  MenuCard,
  MenuTitle,
  Name,
  User,
} from "./UserInfo.styled";
import { ModalAvatarUpload } from "../Modal/ModalAvatarUpload/ModalAvatarUpload";
import { PersonalMenu } from "../PersonalMenu/PersonalMenu";

export const UserInfo: FC = () => {
  const [isOpenAvatarUploadModal, setIsOpenAvatarUploadModal] =
    useState<boolean>(false);
  const [isVisiblePersonalMenu, setIsVisiblePersonalMenu] =
    useState<boolean>(false);

  const menuCardRef = useRef<HTMLDivElement>(null);
  const personalMenuRef = useRef<HTMLUListElement | null>(null);

  const { avatar, username } = useAuth();

  const toggleAvatarUploadModal = () => {
    setIsOpenAvatarUploadModal((prevState: boolean) => !prevState);
  };

  const toggleVisiblePersonalMenu = () => {
    setIsVisiblePersonalMenu((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuCardRef?.current &&
        menuCardRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (
        personalMenuRef?.current &&
        !personalMenuRef.current.contains(event.target as Node)
      ) {
        setIsVisiblePersonalMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <User>
        <Name>{username}</Name>
        <AvatarWrapper>
          {avatar && <Avatar src={avatar} alt="user foto" />}
          <MenuCard ref={menuCardRef} onClick={toggleVisiblePersonalMenu}>
            <MenuTitle>Me</MenuTitle>
            <IoMdArrowDropdown style={{ width: "20px" }} />
          </MenuCard>
          {isVisiblePersonalMenu && (
            <PersonalMenu
              ref={personalMenuRef}
              onToggleVisiblePersonalMenu={toggleVisiblePersonalMenu}
              onToggleAvatarUploadModal={toggleAvatarUploadModal}
            />
          )}
        </AvatarWrapper>
      </User>

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
