import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Formik } from "formik";
import { createStudentValidation } from "./schema";
import TextInput from "../../../components/TextInput";

function UpdateStudent() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function updateStudent(values) {
    setLoading(true);
    let result = await fetch("http://127.0.0.1:8000/api/updateStudent/" + id, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    setLoading(false);
    alert("successfully updated");
  }

  useEffect(() => {
    const asyncFn = async () => {
      let result = await fetch("http://127.0.0.1:8000/api/getStudent/" + id);
      result = await result.json();
      setData(result);
    };
    asyncFn();
  }, [id]);
  return (
    <div className="row justify-content-center ">
      {data.name && !loading && (
        <Formik
          initialValues={{
            name: data.name,
            phoneNo: data.phoneNo,
            address: data.address,
            gender: data.gender,
            subject: data.subject,
            grade: data.grade,
            date: data.date,
          }}
          onSubmit={(values) => {
            updateStudent(values);
          }}
          validationSchema={createStudentValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <h4>Update Student</h4>
              <TextInput
                type="text"
                name="name"
                label="Name"
                value={formikValues.values.name}
                error={formikValues.errors.name}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="number"
                name="phoneNo"
                label="Phone Number"
                value={formikValues.values.phoneNo}
                error={formikValues.errors.phoneNo}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="address"
                label="Address"
                value={formikValues.values.address}
                error={formikValues.errors.address}
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
                type="number"
                name="grade"
                label="Grade"
                value={formikValues.values.grade}
                error={formikValues.errors.grade}
                onChange={formikValues.handleChange}
              />
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

              <div className="m-3">
                <input
                  className="btn btn-success col-12"
                  type="button"
                  value="update student"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default UpdateStudent;
