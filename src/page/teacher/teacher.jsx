import { FaChalkboardTeacher } from "react-icons/fa";

function Teacher({ result }) {
  return (
    <div className="card mt-5 me-3">
      <FaChalkboardTeacher className="ms-0 float-start" size={40} />
      <div className="mb-2 fs-5 fw-bold">Name:-{result.name}</div>
      <div className="card_body">
        <div className="ms-1 fw-lighter">Address:-{result.address}</div>
        <div className="ms-1 fw-lighter">Gender:-{result.gender}</div>
        <div className="ms-1 fw-lighter">Phone:-{result.phoneNo}</div>
        <div className="ms-1 fw-lighter">Expert:-{result.expert}</div>
        <div className="ms-1 fw-lighter">
          Education Level:-{result.educationLevel}
        </div>
        <div className="ms-1 fw-lighter">Days:-{result.day}</div>
        <div className="ms-1 fw-lighter">Time:-{result.time}</div>
      </div>
    </div>
  );
}

export default Teacher;
