import { NavLink } from "react-router-dom";

const Teacher = () => {
  const teachers = [
    {
      name: "Abebe Beso Bela",
      gender: "Male",
      education: "Masters",
      expert: "Java",
      date: "02/07/2023..10:00PM"
    },
    {
      name: "Abebe Beso Bela",
      gender: "Male",
      education: "Masters",
      expert: "Java",
      date: "02/07/2023.10:00PM"
    },
    {
      name: "Abebe Beso Bela",
      gender: "Male",
      education: "Masters",
      expert: "Java",
      date: "02/07/2023..10:00PM"
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h5 className="text-start">List of Teacher</h5>
        <NavLink
          to={"/createTeacher"}
          className="float-end btn btn-primary btn-sm mb-2"
        >
          Add new teacher
        </NavLink>
      </div>
      <div className="rounded-2 border">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Expert</th>
              <th>Date</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                {Object.values(teacher).map((item) => (
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
};
export default Teacher;
