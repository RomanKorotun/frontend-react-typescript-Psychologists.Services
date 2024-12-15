import * as Yup from "yup";

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(emailRegexp, "Invalid email")
    .required("Required"),
  password: Yup.string().required("Required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, "Invalid email")
    .required("Required"),
  password: Yup.string().required("Required"),
});
