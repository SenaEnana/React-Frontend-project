import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { Formik } from "formik";

const UpdateProfile = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function updateProfile(values) {
    setLoading(true);
    let result = await fetch("http://127.0.0.1:8000/api/updateUser/" + id, {
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
    const getUser = async () => {
      let result = await fetch("http://127.0.0.1:8000/api/getUser/" + id);
      result = await result.json();
      setData(result);
    };
    getUser();
  }, [id]);

  return (
    <div className="row justify-content-center ">
      <div>
        <NavLink to="/profile" className="float-end btn btn-danger btn-sm mt-3">
          Back
        </NavLink>
      </div>
      {data.name && !loading && (
        <Formik
          initialValues={{
            name: data.name,
            email: data.email,
            file: {},
            password: data.password,
          }}
          onSubmit={(values) => {
            updateProfile(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4">Update Profile</p>
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

              <div className="m-3">
                <input
                  className="btn btn-success col-12"
                  type="button"
                  value="update"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UpdateProfile;
