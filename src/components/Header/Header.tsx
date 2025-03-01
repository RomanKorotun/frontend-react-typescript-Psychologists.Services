import { FC } from "react";
import { Container } from "../../GlobaStyles";
import { ContainerHeader, HeaderSection } from "./Header.styles";
import { NavMenu } from "../NavMenu/NavMenu";
import { Logo } from "../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserInfo } from "../UserMenu/UserInfo";
import { useAuth } from "../../hooks/useAuth";

export const Header: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderSection>
      <Container>
        <ContainerHeader>
          <Logo />
          <NavMenu />
          {!isLoggedIn ? <AuthNav /> : <UserInfo />}
        </ContainerHeader>
      </Container>
    </HeaderSection>
  );
};
