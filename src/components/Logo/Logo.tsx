import { FC } from "react";
import { LinkLogoStyled, LogoAccentColor } from "./Logo.styled";

export const Logo: FC = () => {
  return (
    <LinkLogoStyled to="/">
      psychologists.<LogoAccentColor>services</LogoAccentColor>
    </LinkLogoStyled>
  );
};
