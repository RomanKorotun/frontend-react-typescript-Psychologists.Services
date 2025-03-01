import styled from "styled-components";

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Name = styled.p`
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const MenuCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuTitle = styled.span`
  font-size: 12px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primaryColor};
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.bgColors.activeBgColor};
  }
`;
