import { Formik, useFormik } from "formik";
import React from "react";
import { createTeacherValidation } from "./schema";
import TextInput from "../../components/TextInput";

const CreateTeacher = () => {
  return (

         <div className="row justify-content-center ">
        <Formik
          initialValues={{
            expert: "",
            gender: "",
            educationLevel: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={createTeacherValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <TextInput
                type="text"
                name=" expert"
                label=" Expert"
                value={formikValues.values. expert}
                error={formikValues.errors. expert}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="gender"
                label="Gender"
                value={formikValues.values.gender}
                error={formikValues.errors.gender}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="educationLevel"
                label="EducationLevel"
                value={formikValues.values.educationLevel}
                error={formikValues.errors.educationLevel}
                onChange={formikValues.handleChange}
              />

              <div className="m-3">
                <input
                  className="btn btn-primary col-12"
                  type="button"
                  value="submit"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
  
  )
}

export default CreateTeacher
   