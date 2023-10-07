import { FaChalkboardTeacher } from "react-icons/fa";

function Student({ result }) {
  return (
    <div className="card mt-5 me-3">
      <FaChalkboardTeacher className="ms-0 float-start" size={40} />
      <div className="mb-2 fs-5 fw-bold">{result.name}</div>
      <div className="card_body">
        <div className="ms-1 fw-lighter">{result.address}</div>
        <div className="ms-1 fw-lighter">{result.gender}</div>
        <div className="ms-1 fw-lighter">{result.phoneNo}</div>
        <div className="ms-1 fw-lighter">{result.expert}</div>
        <div className="ms-1 fw-lighter">{result.educationLevel}</div>
        <div className="ms-1 fw-lighter">{result.date}</div>
      </div>
    </div>
  );
}

export default Student;
