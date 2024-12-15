import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyled = styled.nav`
  @media only screen and (max-width: 849px) {
    gap: 30px;
  }
  display: flex;
  gap: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #191a15;
`;

export const LinkNavStyled = styled(NavLink)`
  position: relative;
  color: currentColor;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 250ms;
  }
  &.active::after {
    width: 100%;
  }
  &:not(.active)::after {
    width: 0;
    transition: none;
  }
`;
