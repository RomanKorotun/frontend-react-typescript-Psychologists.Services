import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IResponseGetAppointmentsForLoggedInUser } from "../../interfaces/appointmentsInterface";
import { Item, List } from "./AppointmentsList.styled";
import { AppointmentsListCard } from "../AppointmentsListCard/AppointmentsListCard";

interface IAppointmentsListProps {
  list: IResponseGetAppointmentsForLoggedInUser[];
}

export const AppointmentsList: FC<IAppointmentsListProps> = ({ list }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/appointments/${id}`);
  };

  return (
    <List>
      {list.map((elem) => {
        return (
          <Item key={elem._id} onClick={() => handleClick(elem._id)}>
            <AppointmentsListCard item={elem} />
          </Item>
        );
      })}
    </List>
  );
};
