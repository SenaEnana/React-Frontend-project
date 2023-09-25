import { Formik } from "formik";
import TextInput from "../../../components/TextInput";
import { signInValidation } from "./schema";

function SignIn({ setLoggedIn, setAuth }) {
  return (
    <>
      <div className="row justify-content-center ">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            setAuth(true);
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
                value={formikValues.values.email}
                error={formikValues.errors.email}
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

              <div className="m-3">
                <input
                  className="btn btn-primary col-12"
                  type="button"
                  value="sign in"
                  onClick={formikValues.handleSubmit}
                />
              </div>
              <p className="text-start user" onClick={() => setLoggedIn(false)}>
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
