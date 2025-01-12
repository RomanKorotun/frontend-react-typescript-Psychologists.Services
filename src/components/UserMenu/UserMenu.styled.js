import styled from "styled-components";

export const UserMenuCard = styled.div`
  display: flex;
  gap: 18px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  /* border-radius: 10px; */
  border-radius: 50px;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #c7c8c7;
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #191a15;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: #fbfbfb;
  }
`;
