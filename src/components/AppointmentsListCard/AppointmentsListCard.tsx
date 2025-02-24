import { FC } from "react";
import { getOrderStatus } from "../../helpers/getOrderStatus";
import {
  DateDisplay,
  Image,
  Name,
  Price,
  PriceAccent,
  Status,
  StatusAccent,
  Time,
} from "./AppointmentsListCard.styled";
import { IResponseGetAppointmentsForLoggedInUser } from "../../interfaces/appointmentsInterface";

interface IAppointmentsListCardProps {
  item: IResponseGetAppointmentsForLoggedInUser;
}

export const AppointmentsListCard: FC<IAppointmentsListCardProps> = ({
  item,
}) => {
  const status = getOrderStatus(item.date, item.time);
  return (
    <>
      <DateDisplay>{item.date}</DateDisplay>
      <Time>{item.time} hours</Time>
      <Price>
        <PriceAccent>{item.psychologistId.price_per_hour}$</PriceAccent>
        &nbsp; price/1 hour
      </Price>
      <Status>
        status: <StatusAccent $status={status}>{status}</StatusAccent>
      </Status>
      <Name>{item.psychologistId.name}</Name>
      <Image src={item.psychologistId.avatar_url} alt="psychologist avatar" />
    </>
  );
};
