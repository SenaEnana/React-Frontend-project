import * as Yup from "yup";
export const createTeacherValidation = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short! minimum character length must be grater than 4.")
    .max(15, "Too Long! maximum character length must be grater than 15.")
    .required("required"),
  expert: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  educationLevel: Yup.string().required("required"),
  date: Yup.string().required("required"),

});