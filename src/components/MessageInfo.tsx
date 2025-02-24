import { Link } from "react-router-dom";
import styled from "styled-components";

export const MessageInfo = styled.div`
  padding-top: 60px;
  text-align: center;
  @media only screen and (max-width: 427px) {
    font-size: 26px;
  }
  @media only screen and (min-width: 428px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const LinkFavorite = styled(Link)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;
