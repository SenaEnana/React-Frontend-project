import * as Yup from "yup";
export const createTeacherValidation = Yup.object().shape({
  expert: Yup.string().required("required"),
  gender: Yup.number().required("required"),
  educationLevel: Yup.string().required("required"),

});