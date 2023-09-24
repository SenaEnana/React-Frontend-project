import * as Yup from "yup";
export const createStudentValidation = Yup.object().shape({
  name: Yup.string()
  .min(4, "Too Short! minimum character length must be grater than 6.")
  .max(15, "Too Long! maximum character length must be grater than 50.")
  .required("required"),
  subject: Yup.string().required("required"),
  date: Yup.string().required("required"),
  grade: Yup.number().required("required"),
  gender: Yup.number().required("required"),
});