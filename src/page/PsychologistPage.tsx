import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Section } from "../GlobaStyles";
import { AppDispatch } from "../redux/store";
import {
  getOnePsychologistForLoggedInUser,
  getOnePsychologistForNotLoggedInUser,
} from "../redux/api";
import { usePsychologists } from "../hooks/usePsychologists";
import { PsychologistListCard } from "../components/PsychologistListCard/PsychologistListCard";
import styled from "styled-components";
import { Loader } from "../components/Loader/Loader";
import { useAuth } from "../hooks/useAuth";

const Wrapper = styled.div`
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
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
`;

const PsychologistPage: FC = () => {
  const { isLoggedIn } = useAuth();
  const { oneItem, loading } = usePsychologists();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      !isLoggedIn && dispatch(getOnePsychologistForNotLoggedInUser({ id }));
      isLoggedIn && dispatch(getOnePsychologistForLoggedInUser({ id }));
    }
  }, [dispatch, id, isLoggedIn]);
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {!loading && (
          <Wrapper>
            {oneItem && <PsychologistListCard item={oneItem} />}
          </Wrapper>
        )}
      </Container>
    </Section>
  );
};

export default PsychologistPage;
