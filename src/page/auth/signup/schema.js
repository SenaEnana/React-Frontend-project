import * as Yup from "yup";
export const signUpValidation = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short! minimum character length must be grater than 6.")
    .max(50, "Too Long! maximum character length must be grater than 50.")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email! provide valid email?")
    .required("Required"),
  address: Yup.string().required("required"),
  phone: Yup.number().required("required"),
  password: Yup.string().required("required"),
  confirmPassword: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  ),
});
