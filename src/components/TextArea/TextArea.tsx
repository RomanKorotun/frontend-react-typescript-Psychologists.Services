import { FieldProps } from "formik";
import { FC } from "react";

interface TextAreaProps extends FieldProps {}

export const TextArea: FC<TextAreaProps> = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};
