import { FC } from "react";
import { NavStyled, LinkNavStyled } from "./NavMenu.styled";
import { useAuth } from "../../hooks/useAuth";

export const NavMenu: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyled>
      <LinkNavStyled to="/">Home</LinkNavStyled>
      <LinkNavStyled to="/psychologists">Psychologists</LinkNavStyled>
      {isLoggedIn && <LinkNavStyled to="/favorite">Favorite</LinkNavStyled>}
    </NavStyled>
  );
};
