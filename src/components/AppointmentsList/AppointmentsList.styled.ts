import styled from "styled-components";

export const List = styled.ul`
  @media screen and (max-width: 968px) {
    max-width: 690px;
    margin-right: auto;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  @media screen and (min-width: 969px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 550px) {
    padding: 20px;
  }
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  padding: 28px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
