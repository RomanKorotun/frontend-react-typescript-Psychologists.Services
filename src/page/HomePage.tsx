import { FC } from "react";
import { Home } from "../components/Home/Home";
import { Container, Section } from "../GlobaStyles";

const HomePage: FC = () => {
  return (
    <Section>
      <Container>
        <Home />
      </Container>
    </Section>
  );
};

export default HomePage;
