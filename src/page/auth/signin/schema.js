import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email! provide valid email?")
    .required("required"),
  password: Yup.string().required("required"),
});
