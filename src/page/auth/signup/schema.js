import * as Yup from "yup";
export const signUpValidation = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short! minimum character length must be grater than 4.")
    .max(15, "Too Long! maximum character length must be grater than 15.")
    .required("required"),
  email: Yup.string()
    .email("Invalid email! provide valid email?")
    .required("required"),
  password: Yup.string().required("required"),
  confirmPassword: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  ),
});
