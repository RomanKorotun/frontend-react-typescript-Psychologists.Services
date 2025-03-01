import { FC } from "react";
import { Nav, LinkNav } from "./NavMenu.styled";
// import { useAuth } from "../../hooks/useAuth";

export const NavMenu: FC = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/psychologists">Psychologists</LinkNav>
      {/* {isLoggedIn && <LinkNav to="/favorite">Favorite</LinkNav>} */}
    </Nav>
  );
};
