import { forwardRef } from "react";
import { ChangeAvatarBtn, Item, List, LogoutBtn } from "./PersonalMenu.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/api";
import {
  resetPsychologistsFavoriteState,
  resetPsychologistsState,
  setFilter,
} from "../../redux/psychologists/psychologistsSlice";

interface IPersonalMenuProps {
  onToggleVisiblePersonalMenu(): void;
  onToggleAvatarUploadModal(): void;
}

export const PersonalMenu = forwardRef<HTMLUListElement, IPersonalMenuProps>(
  ({ onToggleVisiblePersonalMenu, onToggleAvatarUploadModal }, ref) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      dispatch(setFilter({ filter: "Default" }));
      dispatch(resetPsychologistsState());
      dispatch(resetPsychologistsFavoriteState());
      navigate("/");
    };

    return (
      <List ref={ref}>
        <Item onClick={onToggleVisiblePersonalMenu} to="/favorite">
          Favorites
        </Item>
        <Item onClick={onToggleVisiblePersonalMenu} to="/appointments">
          Appointments
        </Item>
        <ChangeAvatarBtn
          onClick={() => {
            onToggleAvatarUploadModal();
            onToggleVisiblePersonalMenu();
          }}
        >
          Change avatar
        </ChangeAvatarBtn>
        <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
      </List>
    );
  }
);
