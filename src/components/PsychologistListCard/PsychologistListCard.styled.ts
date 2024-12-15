import styled from "styled-components";

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
  color: #8a8a89;
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

export const SvgStar = styled.svg`
  margin-right: 8px;
`;

export const Delimiter = styled.span`
  color: #cececd;
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
  color: #191a15;
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
  color: #38cd3e;
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
  fill: ${({ $owner }) => {
    if ($owner === undefined || $owner.length === 0) {
      return "none";
    } else {
      return "#54be96;";
    }
  }};
  stroke: ${({ $owner }) => {
    if ($owner === undefined || $owner.length === 0) {
      return "#181914";
    } else {
      return "#54be96";
    }
  }};
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #191a15;
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
  background-color: #f3f3f3;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;

export const ListItemAccent = styled.span`
  color: #191a15;
`;

export const About = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #8a8b88;
  margin-bottom: 14px;
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
  margin-bottom: 16px;
`;

export const ReviewerAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #deeee7;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #54be96;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewerName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #191a15;
  margin-bottom: 4px;
`;

export const RatingCard = styled.div`
  display: flex;
  gap: 8px;
`;

export const ReviewerComment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #8a8b88;
`;

export const ButtonMakeAppointment = styled.button`
  border-radius: 30px;
  padding: 14px 32px;
  background-color: #54be96;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border: none;
  margin-bottom: 14px;
`;

export const ButtonReadMore = styled.button`
  display: block;
  position: relative;
  border: none;
  background-color: transparent;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #191a15;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #191a15;
  }
`;
