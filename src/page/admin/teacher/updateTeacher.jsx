import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import TextInput from "../../../components/TextInput";

function UpdateTeacher() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function updateTeacher(values) {
    setLoading(true);
    let result = await fetch("http://127.0.0.1:8000/api/updateTeacher/" + id, {
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
      let result = await fetch("http://127.0.0.1:8000/api/getTeacher/" + id);
      result = await result.json();
      setData(result);
    };
    asyncFn();
  }, [id]);
  return (
    <div className="row justify-content-center ">
      <div>
        <NavLink
          to="/teachers"
          className="float-end btn btn-danger btn-sm mt-3"
        >
          Back
        </NavLink>
      </div>
      {data.name && !loading && (
        <Formik
          initialValues={{
            name: data.name,
            phoneNo: data.phoneNo,
            address: data.address,
            expert: data.expert,
            gender: data.gender,
            educationLevel: data.educationLevel,
            day: data.day,
            time: data.time,
          }}
          onSubmit={(values) => {
            updateTeacher(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <h4>Update Teacher</h4>
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
                label="EducationLevel"
                value={formikValues.values.educationLevel}
                error={formikValues.errors.educationLevel}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="day"
                label="Day"
                value={formikValues.values.day}
                error={formikValues.errors.day}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="time"
                name="time"
                label="Time"
                value={formikValues.values.time}
                error={formikValues.errors.time}
                onChange={formikValues.handleChange}
              />

              <div className="m-3">
                <input
                  className="btn btn-success col-12"
                  type="button"
                  value="edit teacher"
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

export default UpdateTeacher;
