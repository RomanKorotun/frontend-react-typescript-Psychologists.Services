import { useSelector } from "react-redux";
import {
  appointmentsListSelector,
  clientIdSelector,
  reservedTimesSelector,
  selectedDateSelector,
  loadingSelector,
  paymentInfoSelector,
  paymentSignatureSelector,
  appointmentSelector,
} from "../redux/appointments/appointmentsSelectors";

export const useAppointments = () => {
  const selectedDate = useSelector(selectedDateSelector);
  const reservedTimes = useSelector(reservedTimesSelector);
  const clientId = useSelector(clientIdSelector);
  const appointmentsList = useSelector(appointmentsListSelector);
  const appointment = useSelector(appointmentSelector);
  const loading = useSelector(loadingSelector);
  const paymentInfo = useSelector(paymentInfoSelector);
  const paymentSignature = useSelector(paymentSignatureSelector);

  return {
    selectedDate,
    reservedTimes,
    clientId,
    appointmentsList,
    appointment,
    loading,
    paymentInfo,
    paymentSignature,
  };
};
