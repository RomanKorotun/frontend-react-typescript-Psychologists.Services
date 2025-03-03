import { ChangeEvent, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { SelectTimeStyled } from "./SelectTime.styled";
import { useAppointments } from "../../../hooks/useAppointments";
import { AppDispatch } from "../../../redux/store";
import {
  addReservedTimesForDay,
  appointmentIsComplete,
} from "../../../redux/api";
import {
  setAddReservedTimesForDay,
  setClientId,
} from "../../../redux/appointments/appointmentsSlice";
import { useSocket } from "../../../contexts/SocketContext";

interface ISelectTimeProps {
  psychologistId: string;
  value: string;
  setFieldValue: (field: string, value: string) => void;
}

export const SelectTime: FC<ISelectTimeProps> = ({
  psychologistId,
  value,
  setFieldValue,
}) => {
  const socket = useSocket();
  const dispatch = useDispatch<AppDispatch>();

  const { selectedDate, reservedTimes, clientId } = useAppointments();

  const handleTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const time = event.target.value;

    setFieldValue("time", time);

    const newClientId = clientId || nanoid();
    !clientId && dispatch(setClientId(newClientId));

    selectedDate &&
      dispatch(
        addReservedTimesForDay({
          psychologistId,
          date: selectedDate,
          time,
          clientId: clientId || newClientId,
        })
      );
  };

  useEffect(() => {
    if (socket && selectedDate) {
      socket.on("newReservedTime", (reservedTimes) => {
        dispatch(setAddReservedTimesForDay(reservedTimes));
      });
      return () => {
        socket.off("newReservedTime");
      };
    }
  }, [dispatch, socket, selectedDate]);

  useEffect(() => {
    if (selectedDate) {
      setFieldValue("time", "");
    }
  }, [selectedDate, setFieldValue]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      clientId && dispatch(appointmentIsComplete({ clientId }));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, clientId]);

  return (
    <SelectTimeStyled
      value={value}
      onChange={handleTimeChange}
      disabled={!selectedDate}
    >
      <option value="" disabled>
        Time
      </option>

      {reservedTimes.map((timeSlot, index) => (
        <option
          key={index}
          value={timeSlot.time}
          disabled={timeSlot.isReserved}
        >
          {timeSlot.time}
        </option>
      ))}
    </SelectTimeStyled>
  );
};
