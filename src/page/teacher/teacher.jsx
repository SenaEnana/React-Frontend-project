import { PiStudentBold } from "react-icons/pi";

function Teacher({ result2 }) {
  return (
    <div className="card mt-5 me-3">
      <PiStudentBold className="ms-0 float-start" size={40} />
      <div className="mb-2 fs-5 fw-bold">{result2.name}</div>
      <div className="card_body">
        <div className="ms-1 fw-lighter">{result2.grade}</div>
        <div className="ms-1 fw-lighter">{result2.address}</div>
        <div className="ms-1 fw-lighter">{result2.gender}</div>
        <div className="ms-1 fw-lighter">{result2.phoneNo}</div>
        <div className="ms-1 fw-lighter">{result2.subject}</div>
        <div className="ms-1 fw-lighter">{result2.date}</div>
      </div>
    </div>
  );
}

export default Teacher;
