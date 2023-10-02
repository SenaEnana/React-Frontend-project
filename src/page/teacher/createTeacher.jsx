import { Formik } from "formik";
import React from "react";
import { createTeacherValidation } from "./schema";
import TextInput from "../../components/TextInput";
import { NavLink } from "react-router-dom";

const CreateTeacher = () => {
  async function teacherRegistration(values) {
    let result = await fetch("http://127.0.0.1:8000/api/createTeacher", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-add-info", JSON.stringify(result));
    alert("successfully registered");
  }
  return (
    <div className="row justify-content-center ">
      <div>
        <NavLink
          to="/teachers"
          className="float-end btn btn-primary btn-sm mt-3"
        >
          show list of teachers
        </NavLink>
      </div>
      <Formik
        initialValues={{
          name: "",
          expert: "",
          gender: "",
          educationLevel: "",
          date: "",
        }}
        onSubmit={(values) => {
          teacherRegistration(values);
        }}
        validationSchema={createTeacherValidation}
      >
        {(formikValues) => (
          <form className="form-group rounded border col-4 pe-3 mt-3 bg-light">
            <h4>Create Teacher</h4>
            <TextInput
              type="text"
              name="name"
              label="Name"
              value={formikValues.values.name}
              error={formikValues.errors.name}
              onChange={formikValues.handleChange}
            />
            <TextInput
              type="text"
              name="expert"
              label="Expert"
              value={formikValues.values.expert}
              error={formikValues.errors.expert}
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
              label="Education Level"
              value={formikValues.values.educationLevel}
              error={formikValues.errors.educationLevel}
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
  );
};

export default CreateTeacher;
