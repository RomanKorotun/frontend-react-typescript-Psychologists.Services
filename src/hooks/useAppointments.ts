import { useSelector } from "react-redux";
import {
  clientIdSelector,
  reservedTimesSelector,
  selectedDateSelector,
} from "../redux/appointments/appointmentsSelectors";

export const useAppointments = () => {
  const selectedDate = useSelector(selectedDateSelector);
  const reservedTimes = useSelector(reservedTimesSelector);
  const clientId = useSelector(clientIdSelector);

  return { selectedDate, reservedTimes, clientId };
};
