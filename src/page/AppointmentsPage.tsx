import { FC, useEffect } from "react";
import { Container, Section } from "../GlobaStyles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getAppointmentsForLoggedInUser } from "../redux/api";
import { useAppointments } from "../hooks/useAppointments";
import { AppointmentsList } from "../components/AppointmentsList/AppointmentsList";
import styled from "styled-components";
import { MessageInfo } from "../components/MessageInfo";
import { Loader } from "../components/Loader/Loader";

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 799px) {
    text-align: center;
  }
`;

const AppointmentsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { appointmentsList, loading } = useAppointments();

  useEffect(() => {
    dispatch(getAppointmentsForLoggedInUser());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Title>My appointments</Title>
        {loading && <Loader />}
        {appointmentsList.length === 0 && !loading && (
          <MessageInfo>
            You currently have no appointments scheduled with psychologists.
          </MessageInfo>
        )}
        {appointmentsList.length > 0 && !loading && (
          <AppointmentsList list={appointmentsList} />
        )}
      </Container>
    </Section>
  );
};

export default AppointmentsPage;
