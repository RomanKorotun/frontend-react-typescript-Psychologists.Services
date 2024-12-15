import { FC } from "react";
import { Container } from "../../GlobaStyles";
import { ContainerHeader, HeaderStyled } from "./Header.styles";
import { NavMenu } from "../NavMenu/NavMenu";
import { Logo } from "../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { useAuth } from "../../hooks/useAuth";

export const Header: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyled>
      <Container>
        <ContainerHeader>
          <Logo />
          <NavMenu />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </ContainerHeader>
      </Container>
    </HeaderStyled>
  );
};
