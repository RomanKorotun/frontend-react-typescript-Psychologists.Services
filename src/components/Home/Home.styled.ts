import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoArrowUpRight } from "react-icons/go";

export const HomeCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 599px) {
    flex-direction: column;
  }
`;

export const TitleCard = styled.div`
  max-width: 595px;
  @media only screen and (max-width: 599px) {
    order: 2;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  line-height: 1.025;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 20px;
  font-size: 32px;
  @media only screen and (min-width: 400px) {
    font-size: 44px;
  }
  @media only screen and (max-width: 599px) {
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    font-size: 32px;
  }
  @media only screen and (min-width: 700px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 800px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 60px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 80px;
  }
`;

export const TitleAccent = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primaryColor};
  max-width: 510px;
  margin-bottom: 40px;
  @media only screen and (max-width: 599px) {
    text-align: center;
  }
  @media only screen and (max-width: 699px) {
    font-size: 14px;
  }
`;

export const LinkHome = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.bgColors.accentBgColor};
  border-radius: 30px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.bgColors.activeAccentBgColor};
  }

  @media only screen and (max-width: 382px) {
    display: block;
    max-width: 260px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 13px;
  }

  @media only screen and (min-width: 383px) and (max-width: 599px) {
    display: block;
    max-width: 260px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 16px;
  }

  @media only screen and (min-width: 600px) {
    padding-top: 16px;
    padding-right: 30px;
    padding-bottom: 16px;
    padding-left: 30px;
    font-size: 16x;
  }
  @media only screen and (min-width: 700px) {
    padding-top: 16px;
    padding-right: 40px;
    padding-bottom: 16px;
    padding-left: 40px;
    font-size: 16px;
  }
  @media only screen and (min-width: 800px) {
    padding-top: 18px;
    padding-right: 50px;
    padding-bottom: 18px;
    padding-left: 50px;
    font-size: 20px;
  }
`;

export const LinkContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ArrowUpRight = styled(GoArrowUpRight)`
  color: " #fbfbfb";
  @media only screen and (max-width: 599px) {
    width: 17px;
    height: 17px;
  }
  @media only screen and (min-width: 600px) {
    width: 17px;
    height: 17px;
  }
  @media only screen and (min-width: 700px) {
    width: 19px;
    height: 19px;
  }
  @media only screen and (min-width: 800px) {
    width: 24px;
    height: 24px;
  }
`;

export const PictureStyled = styled.div`
  @media only screen and (max-width: 599px) {
    order: 1;
  }
`;

export const ImageStyled = styled.img`
  border-radius: 10px;

  @media only screen and (max-width: 599px) {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 600px) {
    width: 234px;
    height: auto;
  }
  @media only screen and (min-width: 700px) {
    width: 304px;
  }
  @media only screen and (min-width: 800px) {
    width: 324px;
  }
  @media only screen and (min-width: 1000px) {
    width: 394px;
  }
  @media only screen and (min-width: 1100px) {
    width: 434px;
  }
  @media only screen and (min-width: 1200px) {
    width: 464px;
  }
`;
