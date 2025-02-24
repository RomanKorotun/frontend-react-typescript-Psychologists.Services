import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkLogoStyled = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const LogoAccentColor = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentColor};
`;
