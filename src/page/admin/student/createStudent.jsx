import { Formik, Field } from "formik";
import { createStudentValidation } from "./schema";
import TextInput from "../../../components/TextInput";
import { NavLink } from "react-router-dom";
import DropDown from "../../../components/DropDown";
import { useState } from "react";

const CreateStudent = () => {
  const [gender, setGender] = useState([
    { values: "female", label: "Female" },
    { values: "male", label: "Male" },
  ]);

  async function studentRegistration(values) {
    let result = await fetch("http://127.0.0.1:8000/api/createStudent", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    alert("successfully created");
  }
  return (
    <div className="row justify-content-center ">
      <div>
        <NavLink
          to="/students"
          className="float-end btn btn-primary btn-sm mt-3"
        >
          show list of students
        </NavLink>
      </div>
      <Formik
        initialValues={{
          name: "",
          phoneNo: "",
          address: "",
          gender: "",
          subject: "",
          grade: "",
          day: "",
          time: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          studentRegistration(values);
        }}
        // validationSchema={createStudentValidation}
      >
        {(formikValues) => (
          <form className="form-group rounded border col-4 pe-3 mt-3 bg-light">
            <h4>Create Student</h4>
            <TextInput
              type="text"
              name="name"
              label="Name"
              placeholder="enter your name"
              value={formikValues.values.name}
              error={formikValues.errors.name}
              onChange={formikValues.handleChange}
            />
            <TextInput
              type="number"
              name="phoneNo"
              label="Phone Number"
              placeholder="enter your phone number"
              value={formikValues.values.phoneNo}
              error={formikValues.errors.phoneNo}
              onChange={formikValues.handleChange}
            />
            <TextInput
              type="text"
              name="address"
              label="Address"
              placeholder="enter your address"
              value={formikValues.values.address}
              error={formikValues.errors.address}
              onChange={formikValues.handleChange}
            />
            <DropDown
              label="Gender"
              name="gender"
              options={gender}
              value={formikValues.values.gender}
              error={formikValues.errors.gender}
              onChange={(selectedOption) => {
                formikValues.setFieldValue("gender", selectedOption);
              }}
            />
            <TextInput
              type="number"
              name="grade"
              label="Grade"
              placeholder="enter your grade"
              value={formikValues.values.grade}
              error={formikValues.errors.grade}
              onChange={formikValues.handleChange}
            />
            <TextInput
              type="text"
              name="subject"
              label="Subject"
              placeholder="enter the subject to study"
              value={formikValues.values.subject}
              error={formikValues.errors.subject}
              onChange={formikValues.handleChange}
            />
            <TextInput
              type="text"
              name="day"
              label="Day"
              placeholder="how many days you want to study in a week"
              value={formikValues.values.day}
              error={formikValues.errors.day}
              onChange={formikValues.handleChange}
            />
            <TextInput
              type="time"
              name="time"
              label="Time"
              placeholder="enter time you want to study"
              value={formikValues.values.time}
              error={formikValues.errors.time}
              onChange={formikValues.handleChange}
            />

            <div className="m-3">
              <input
                className="btn btn-success col-12"
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

export default CreateStudent;
