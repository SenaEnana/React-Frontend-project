import { Formik } from "formik";
import TextInput from "../../../components/TextInput";
import { signInValidation } from "./schema";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  async function login(values) {
    let result = await fetch("http://127.0.0.1:8000/api/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    result = await result.json();
    localStorage.setItem("user-login", "true");
    localStorage.setItem("name", JSON.stringify(result.name));
    localStorage.setItem("role", JSON.stringify(result.role));
    localStorage.setItem("email", JSON.stringify(result.email));
    window.location.href = "/";
  }
  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            login(values);
          }}
          validationSchema={signInValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4">Sign In</p>
              </div>
              <TextInput
                type="email"
                name="email"
                label="Email"
                placeholder="enter your email"
                value={formikValues.values.email}
                error={formikValues.errors.email}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="password"
                label="Password"
                placeholder="enter your password"
                value={formikValues.values.password}
                error={formikValues.errors.password}
                onChange={formikValues.handleChange}
              />

              <div className="m-3">
                <input
                  className="btn btn-success col-12"
                  type="button"
                  value="sign in"
                  onClick={formikValues.handleSubmit}
                />
              </div>
              <p
                className="text-start user"
                onClick={() => navigate("/signUp")}
              >
                did't have an account?
              </p>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default SignIn;
