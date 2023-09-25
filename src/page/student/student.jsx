import { NavLink } from "react-router-dom";

function Student() {
  const students = [
    {
      name: "Abebe Beso Bela",
      gender: "Male",
      garde: "Grade 10",
      subject: "English",
    },
    {
      name: "Abebe Beso Bela",
      gender: "Male",
      grade: "Grade 8",
      subject: "Mathematics",
    },
    {
      name: "Abebe Beso Bela",
      gender: "Male",
      grade: "Grade 11",
      subject: "Geography",
    },
  ];
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
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>grade</th>
              <th>Subject</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                {Object.values(student).map((item) => (
                  <td key={item}>{item}</td>
                ))}
                <td>
                  <button className="btn btn-outline-info btn-sm" type="button">
                    Edit
                  </button>
                  <button
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
export default Student;
