import { forwardRef } from "react";
import { Item, List, LogoutBtn } from "./PersonalMenu.styled";
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
  onToggleVisibleMenu(): void;
}

export const PersonalMenu = forwardRef<HTMLUListElement, IPersonalMenuProps>(
  ({ onToggleVisibleMenu }, ref) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      dispatch(setFilter({ filter: "Default" }));
      dispatch(resetPsychologistsState());
      dispatch(resetPsychologistsFavoriteState());
      navigate("/psychologists");
    };

    return (
      <List ref={ref}>
        <Item onClick={onToggleVisibleMenu} to="/appointments">
          Appointments
        </Item>
        <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
      </List>
    );
  }
);
