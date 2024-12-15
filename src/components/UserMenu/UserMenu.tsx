import { FC } from "react";
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

export const UserMenu: FC = () => {
  const { avatar, username } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout());
    dispatch(setFilter({ filter: "Default" }));
    dispatch(resetPsychologistsState());
    dispatch(resetPsychologistsFavoriteState());
    navigate("/psychologists");
  };

  return (
    <UserMenuCard>
      <User>
        {avatar && <Avatar src={avatar} alt="userfoto" />}
        <p>{username}</p>
      </User>
      <Button onClick={handleClick}>Log out</Button>
    </UserMenuCard>
  );
};
