import { FC } from "react";
import {
  HomeCard,
  ImageStyled,
  LinkHome,
  SubTitle,
  Title,
  TitleAccent,
  TitleCard,
  PictureStyled,
  ArrowUpRight,
  LinkContent,
} from "./Home.styled";
import foto_1_1x_jpeg from "../../images/heroFoto/image_1.jpg";
import foto_1_2x_jpeg from "../../images/heroFoto/image_1@2x.jpg";
import foto_2_1x_webp from "../../images/heroFoto/image_2.webp";
import foto_2_2x_webp from "../../images/heroFoto/image_2@2x.webp";

export const Home: FC = () => {
  return (
    <HomeCard>
      <TitleCard>
        <Title>
          The road to the <TitleAccent>depths</TitleAccent> of the human soul
        </Title>
        <SubTitle>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </SubTitle>
        <LinkHome to="/psychologists">
          <LinkContent>
            <span>Get started</span>
            <ArrowUpRight />
          </LinkContent>
        </LinkHome>
      </TitleCard>
      <PictureStyled>
        <source
          type="image/webp"
          srcSet={`${foto_2_2x_webp}, ${foto_2_1x_webp}`}
        />
        <source
          type="image/jpeg"
          srcSet={`${foto_1_2x_jpeg}, ${foto_1_1x_jpeg}`}
        />
        <ImageStyled src={foto_1_1x_jpeg} alt="foto_hero" />
      </PictureStyled>
    </HomeCard>
  );
};
