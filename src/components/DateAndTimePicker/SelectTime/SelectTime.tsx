import { FC, useEffect } from "react";
import { SelectTimeStyled } from "./SelectTime.styled";
import { useAppointments } from "../../../hooks/useAppointments";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addReservedTimesForDay } from "../../../redux/api";
import { nanoid } from "nanoid";
import {
  setAddReservedTimesForDay,
  setClientId,
} from "../../../redux/appointments/appointmentsSlice";
import { useSocket } from "../../../hooks/useSocket";

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

  useEffect(() => {
    if (socket && selectedDate) {
      socket.on("newReservedTime", (reservedTimes) => {
        console.log("effect");
        dispatch(setAddReservedTimesForDay(reservedTimes));
      });
    }
  }, [dispatch, socket, selectedDate]);

  useEffect(() => {
    return () => {
      dispatch(setClientId(null));
    };
  }, [dispatch]);

  return (
    <SelectTimeStyled
      value={value}
      onChange={(event) => {
        setFieldValue("time", event.target.value);
        let newClientId = "";

        if (!clientId) {
          newClientId = nanoid();
          dispatch(setClientId(newClientId));
        }

        if (selectedDate) {
          dispatch(
            addReservedTimesForDay({
              psychologistId,
              date: selectedDate,
              time: event.target.value,
              clientId: clientId || newClientId,
            })
          );
        }
      }}
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
