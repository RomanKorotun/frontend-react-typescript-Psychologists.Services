export const getOrderStatus = (
  appointmentDate: string,
  appointmentTime: string
) => {
  const currentDate = new Date();

  const [appointmentYear, appointmentMonth, appointmentDay] =
    appointmentDate.split("-");
  const [startTime, endTime] = appointmentTime.split(" - ");
  const [startHour, startMinute] = startTime.split(":");
  const [endHour, endMinute] = endTime.split(":");

  const appointmentStartDateObj = new Date(
    Number(appointmentYear),
    Number(appointmentMonth) - 1,
    Number(appointmentDay),
    Number(startHour),
    Number(startMinute)
  );

  const appointmentEndDateObj = new Date(
    Number(appointmentYear),
    Number(appointmentMonth) - 1,
    Number(appointmentDay),
    Number(endHour),
    Number(endMinute)
  );

  if (currentDate < appointmentStartDateObj) {
    return "scheduled";
  } else if (currentDate > appointmentEndDateObj) {
    return "сompleted";
  } else {
    return "in progress";
  }
};
