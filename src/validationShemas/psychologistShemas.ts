import * as Yup from "yup";

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ReviewShema = Yup.object().shape({
  rating: Yup.number()
    .required("Required")
    .test("is-not-zero", "Required", (value) => value !== 0),
  comment: Yup.string().required("Required"),
});

export const AppointmentShema = Yup.object().shape({
  name: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string()
    .matches(emailRegexp, "Invalid email")
    .required("Required"),
  comment: Yup.string(),
});
