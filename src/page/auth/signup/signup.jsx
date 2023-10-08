import { Formik } from "formik";
import TextInput from "../../../components/TextInput";
import { signUpValidation } from "./schema";
import DropDown from "../../../components/DropDown";
import { useState } from "react";

function SignUp({ setLoggedIn }) {
  const [roles, setRoles] = useState([
    { values: "admin", label: "Admin" },
    { values: "student", label: "Student" },
    { values: "teacher", label: "Teacher" },
  ]);

  async function userRegistration(values) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("file_path", values.file); // Make sure values.file is a valid File object
    formData.append("role", values.role);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);
    try {
      let result = await fetch("http://127.0.0.1:8000/api/registration", {
        method: "POST",
        body: formData,
        headers: {
          // The Content-Type header is set correctly for FormData
        },
      });
      if (result.ok) {
        // Handle any further actions, like redirection or displaying a success message
        console.log("Registration successful");
        window.location.href = "/";
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }
  return (
    <>
      <div className="row justify-content-center ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            role: "",
            file: {},
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            userRegistration(values);
          }}
          // validationSchema={signUpValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4">Sign Up</p>
              </div>
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
                type="email"
                name="email"
                label="Email"
                placeholder="enter your email"
                value={formikValues.values.email}
                error={formikValues.errors.email}
                onChange={formikValues.handleChange}
              />
              <DropDown
                label="Role"
                name="role"
                options={roles}
                value={formikValues.values.role}
                error={formikValues.errors.role}
                onChange={(selectedOption) => {
                  formikValues.setFieldValue("role", selectedOption);
                }}
              />
              <div className="col-12 row">
                <div>
                  <label className="float-start">Image</label>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) =>
                      formikValues.setFieldValue(
                        "file",
                        event.currentTarget.files[0]
                      )
                    }
                  />
                </div>
              </div>
              <TextInput
                type="password"
                name="password"
                label="Password"
                placeholder="enter your password"
                value={formikValues.values.password}
                error={formikValues.errors.password}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="confirm your password"
                value={formikValues.values.confirmPassword}
                error={formikValues.errors.confirmPassword}
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
              <p className="text-start user" onClick={() => setLoggedIn(true)}>
                Already have an account?
              </p>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default SignUp;
