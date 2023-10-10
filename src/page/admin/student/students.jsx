import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Students() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/deleteStudent/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  }

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/listStudents");
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h5 className="text-start">List of Students</h5>
        <NavLink
          to={"/createStudent"}
          className="float-end btn btn-primary btn-sm mb-2"
        >
          Add new student
        </NavLink>
      </div>
      <div className="rounded-2 border">
        <table className="table table-hover">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Gender</th>
            <th>grade</th>
            <th>Subject</th>
            <th>Day</th>
            <th>Time</th>
            <th>Role</th>
            <td></td>
          </tr>

          <tbody>
            {data.map((student) => (
              <tr key={student.id}>
                {Object.values(student).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <NavLink to={"/updateStudent/" + student.id}>
                    <button
                      className="btn btn-outline-info btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </NavLink>
                  <button
                    onClick={() => deleteOperation(student.id)}
                    className="btn btn-outline-danger ms-1 btn-sm"
                    type="button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Students;
