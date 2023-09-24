import * as Yup from "yup";
export const createStudentValidation = Yup.object().shape({
  subject: Yup.string().required("required"),
  date: Yup.string().required("required"),
  grade: Yup.number().required("required"),
});