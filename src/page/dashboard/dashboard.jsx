import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4 className="text-center mt-3">
        There are many information about the teachers and students in the
        database the information is listed according to the following
      </h4>
      <div className="d-flex float-center">
        <div className="card mt-5 me-5 ms-5">
          <div className="mb-2 fs-5 fw-bold">Teacher Name</div>
          <div className="card_body">
            <div className="ms-1 fw-lighter">Address</div>
            <div className="ms-1 fw-lighter">Gender</div>
            <div className="ms-1 fw-lighter">Phone No</div>
            <div className="ms-1 fw-lighter">Expert</div>
            <div className="ms-1 fw-lighter">Level of education</div>
            <div className="ms-1 fw-lighter">Date of teaching</div>
            <div className="fw-lighter fs-5 ms-0">
              There are around 10 student sizes in the database the database is
              capable of more than million students
            </div>
          </div>
        </div>
        <div className="card mt-5 ms-4">
          <div className="mb-2 fs-5 fw-bold">Student Name</div>
          <div className="card_body">
            <div className="ms-1 fw-lighter">Grade</div>
            <div className="ms-1 fw-lighter">Address</div>
            <div className="ms-1 fw-lighter">Gender</div>
            <div className="ms-1 fw-lighter">Phone no</div>
            <div className="ms-1 fw-lighter">Subject to study</div>
            <div className="ms-1 fw-lighter">Date of studying</div>
            <div className="fs-5 ms-0 fw-lighter">
              There are around 20 teachers in number in the database according
              to the counting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
