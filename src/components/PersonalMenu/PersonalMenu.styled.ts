import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: -68px;
  left: -70px;
  padding: 16px;
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor};
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 10px;
`;

export const Item = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
`;
