import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  cursor: pointer;
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
  transition: transform 250ms, box-shadow 250ms;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  &:hover,
  &:focus {
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;
