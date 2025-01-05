import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { AppDispatch } from "../../redux/store";
import { getReservedTimesForDay } from "../../redux/api";
import { setSelectedDate } from "../../redux/appointments/appointmentsSlice";

interface ISelectDateProps {
  psychologistId: string;
  selected: Date | null;
  setFieldValue: (field: string, value: Date | null) => void;
}

export const SelectDate: FC<ISelectDateProps> = ({
  psychologistId,
  selected,
  setFieldValue,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDateChange = (date: Date | null) => {
    setFieldValue("date", date);

    date && dispatch(setSelectedDate({ date: date.toLocaleString() }));

    dispatch(getReservedTimesForDay({ psychologistId, date }));
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedDate({ date: null }));
    };
  }, [dispatch]);

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <DatePicker
      selected={selected}
      onChange={handleDateChange}
      dateFormat="dd-MM-yyyy"
      showMonthDropdown
      highlightDates={[new Date()]}
      placeholderText="Date"
      filterDate={(date) => !isWeekend(date)}
    />
  );
};
