import { Formik } from "formik";
import TextInput from "../../../components/TextInput";
import { signUpValidation } from "./schema";
import { useNavigate } from "react-router-dom";

function SignUp({ setLoggedIn }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="row justify-content-center ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
          }}
          // value={name} onChange={(e) => setName(e.target.value)}/>
          onSubmit={
            (values) => {
            console.log(values);
          }
      //     async function register(values)
      //     {
      //       navigate("/home");
      //    //let item={name,email,phoneNo,address,password};
      //     let result = await fetch("http://127.0.0.1:8000/api/register",{
      //      method:"POST",
      //      body:JSON.stringify(values),
      //      headers:{
      //         "Content-Type":"application/json",
      //        "Accept":"application/json"
      //       }
      //     })
      //    result = await result.json();
      //    localStorage.setItem("user-info",JSON.stringify(result));
      //    console.log(values);
         
      //    localStorage.setItem("name",JSON.stringify(result.name));
      //    localStorage.setItem("email",JSON.stringify(result.email));
      //    localStorage.setItem("phoneNo",JSON.stringify(result.phoneNo));
      //    localStorage.setItem("address",JSON.stringify(result.address));
      //    localStorage.setItem("password",JSON.stringify(result.password));
       
      //  }
        }
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
                type="address"
                name="address"
                label="Address"
                value={formikValues.values.address}
                error={formikValues.errors.address}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="phone"
                name="phone"
                label="Phone"
                value={formikValues.values.phone}
                error={formikValues.errors.phone}
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
