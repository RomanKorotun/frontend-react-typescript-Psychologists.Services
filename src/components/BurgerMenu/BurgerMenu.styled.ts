import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  width: 320px;
  margin: 0;
  padding-top: 34px;
  padding-right: 45px;
  padding-bottom: 45px;
  padding-left: 45px;
  background-color: #ec8942;
  position: fixed;
  height: 100vh;
  z-index: 1000;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonBurgerClose = styled.button`
  display: block;
  margin-left: auto;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;
`;
