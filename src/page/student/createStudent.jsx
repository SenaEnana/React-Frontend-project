import React from 'react'
import { Formik, useFormik } from "formik";
import { createStudentValidation } from "./schema";
import TextInput from '../../components/TextInput';

const CreateStudent = () => {
  return (
    <div className="row justify-content-center ">
              <Formik
          initialValues={{
            subject: "",
            date: "",
            grade: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={createStudentValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <TextInput
                type="text"
                name="subject"
                label="Subject"
                value={formikValues.values.subject}
                error={formikValues.errors.subject}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="datetime-local"
                name="date"
                label="Date"
                value={formikValues.values.date}
                error={formikValues.errors.date}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="grade"
                name="grade"
                label="Grade"
                value={formikValues.values.grade}
                error={formikValues.errors.grade}
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

export default CreateStudent


