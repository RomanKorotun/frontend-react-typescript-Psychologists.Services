import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const LinkNav = styled(NavLink)`
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }

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
