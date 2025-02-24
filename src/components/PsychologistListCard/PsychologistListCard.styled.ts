import styled from "styled-components";
import { ISvgStarProps } from "../../interfaces/psychologistsInterfaces";

export const InfoWrapper = styled.div`
  @media screen and (max-width: 929px) {
    margin-bottom: 20px;
  }
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const ImgCard = styled.div`
  @media screen and (min-width: 930px) {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  display: inline-block;
  border-radius: 30px;
  border: 1px solid #deeee7;
  padding: 12px;
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 15px;
`;

export const Profession = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryColor};
  margin-bottom: 8px;
`;

export const RatingPriceFavoriteWrapper = styled.div`
  @media screen and (max-width: 699px) {
    left: 20px;
  }
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RatingPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SvgStar = styled.svg<ISvgStarProps>`
  stroke: ${({ theme }) => theme.colors.primaryColor};
  fill: ${({ $isFilled, theme }) =>
    $isFilled ? theme.bgColors.ratingBgGolor : theme.bgColors.secondaryBgColor};
  margin-right: 8px;
`;

export const Delimiter = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColor};
  margin-left: 8px;
  margin-right: 8px;
`;

export const Rating = styled.span`
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Price = styled.span`
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: #191a15;
  margin-right: 8px;
`;

export const PriceAccent = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const ButtonSvg = styled.button`
  padding: 0;
  height: 20px;
  background-color: transparent;
  border: none;
`;

interface MySvgHeartProps {
  $owner: string[] | undefined;
}

export const SvgHeart = styled.svg<MySvgHeartProps>`
  fill: ${({ $owner, theme }) => {
    if ($owner === undefined || $owner.length === 0) {
      return "none";
    } else {
      return theme.bgColors.accentBgColor;
    }
  }};
  stroke: ${({ $owner, theme }) => {
    if ($owner === undefined || $owner.length === 0) {
      return "#181914";
    } else {
      return theme.colors.primaryColor;
    }
  }};
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 24px;
`;

export const List = styled.ul`
  max-width: 840px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 4px;
  row-gap: 8px;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  background-color: ${({ theme }) => theme.bgColors.primaryBgColor};
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;

export const ListItemAccent = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const About = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryColor};
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ButtonAction = styled.button`
  border-radius: 30px;
  padding: 14px 32px;
  background-color: ${({ theme }) => theme.bgColors.accentBgColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border: none;
  transition: transform 250ms, background-color 250ms;
  &:hover,
  &:focus {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.bgColors.activeAccentBgColor};
  }
`;

export const ReviewList = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewerCard = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`;

export const ReviewerAvatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

export const ReviewerDate = styled.div`
  font-size: 10px;
  margin-bottom: 4px;
`;

export const ReviewerName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 4px;
`;

export const ReviewerComment = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const NotFoundMessage = styled.div`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
