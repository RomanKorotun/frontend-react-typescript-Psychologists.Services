import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  z-index: 1000;
  cursor: default;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: -135px;
  left: -80px;
  padding: 13px;
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 5px;
`;

export const Item = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const ChangeAvatarBtn = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
  margin-bottom: 12px;
`;

export const LogoutBtn = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
`;
