import { FC } from "react";
import { LinkLogoStyled, LogoAccentColor } from "./Logo.styled";

export const Logo: FC = () => {
  return (
    <LinkLogoStyled to="/">
      <LogoAccentColor>psychologists.</LogoAccentColor>services
    </LinkLogoStyled>
  );
};
