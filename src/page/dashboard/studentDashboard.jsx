import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4 className="text-center mt-3">Click the button to see Students</h4>
      <div className="d-flex float-center">
        <div className="card mt-5 ms-4">
          <div className="mb-2 fs-5 fw-bold">Student Name</div>
          <div className="card_body">
            <div className="ms-1 fw-lighter">Grade</div>
            <div className="ms-1 fw-lighter">Address</div>
            <div className="ms-1 fw-lighter">Gender</div>
            <div className="ms-1 fw-lighter">Phone no</div>
            <div className="ms-1 fw-lighter">Subject to study</div>
            <div className="ms-1 fw-lighter">Date of studying</div>
            <button
              className="btn btn-sm btn-outline-info mt-3 ms-5"
              onClick={() => {
                navigate("/student");
              }}
            >
              student
            </button>
            <div className="fs-5 ms-0 fw-bold">
              There are around 20 students in number in the database according
              to the counting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
