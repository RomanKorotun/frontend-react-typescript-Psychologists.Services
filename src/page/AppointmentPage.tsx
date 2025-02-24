import { FC, useEffect } from "react";
import { Container, Section } from "../GlobaStyles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getAppointmentForLoggedInUser } from "../redux/api";
import { useAppointments } from "../hooks/useAppointments";
import { Loader } from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 799px) {
    text-align: center;
  }
`;

const Appointment = styled.div`
  display: inline-block;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.bgColors.secondaryBgColor};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const MeetingLink = styled.a`
  word-break: break-all;
`;

const AppointmentPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { appointment, loading } = useAppointments();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getAppointmentForLoggedInUser(id));
    }
  }, [dispatch, id]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {appointment && !loading && (
          <>
            <Title>Appointment</Title>
            <Appointment>
              <div>{appointment.psychologistId.name}</div>
              <div>Date: {appointment.date}</div>
              <div>Time: {appointment.time}</div>
              <MeetingLink target="_blanck" href={appointment.meetingLink}>
                {appointment.meetingLink}
              </MeetingLink>
            </Appointment>
          </>
        )}
      </Container>
    </Section>
  );
};

export default AppointmentPage;
