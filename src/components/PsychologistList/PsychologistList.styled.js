import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  @media screen and (max-width: 350px) {
    padding-right: 10px;
    padding-left: 10px;
  }
  position: relative;
  background-color: #fbfbfb;
  border-radius: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  @media screen and (max-width: 699px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 930px) {
    padding-left: 160px;
  }
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;
