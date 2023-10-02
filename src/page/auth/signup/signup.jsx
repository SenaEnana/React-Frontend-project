import { Formik } from "formik";
import TextInput from "../../../components/TextInput";
import { signUpValidation } from "./schema";

function SignUp({ setLoggedIn }) {
  async function userRegistration(values) {
    let result = await fetch("http://127.0.0.1:8000/api/registration", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    alert("user created");
  }
  return (
    <>
      <div className="row justify-content-center ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNo: "",
            address: "",
            role: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            userRegistration(values);
          }}
          validationSchema={signUpValidation}
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
                value={formikValues.values.name}
                error={formikValues.errors.name}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="email"
                name="email"
                label="Email"
                value={formikValues.values.email}
                error={formikValues.errors.email}
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
                type="number"
                name="phoneNo"
                label="Phone"
                value={formikValues.values.phoneNo}
                error={formikValues.errors.phoneNo}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="role"
                label="Role"
                value={formikValues.values.role}
                error={formikValues.errors.role}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="password"
                label="Password"
                value={formikValues.values.password}
                error={formikValues.errors.password}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={formikValues.values.confirmPassword}
                error={formikValues.errors.confirmPassword}
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
