import { PiStudentBold } from "react-icons/pi";

function Student({ result2 }) {
  return (
    <div className="card mt-5 me-3">
      <PiStudentBold className="ms-0 float-start" size={40} />
      <div className="mb-2 fs-5 fw-bold">Name:-{result2.name}</div>
      <div className="card_body">
        <div className="ms-1 fw-lighter">Grade:-{result2.grade}</div>
        <div className="ms-1 fw-lighter">Address:-{result2.address}</div>
        <div className="ms-1 fw-lighter">Gender:-{result2.gender}</div>
        <div className="ms-1 fw-lighter">Phone:-{result2.phoneNo}</div>
        <div className="ms-1 fw-lighter">Subject:-{result2.subject}</div>
        <div className="ms-1 fw-lighter">Day:-{result2.day}</div>
        <div className="ms-1 fw-lighter">Time:-{result2.time}</div>
      </div>
    </div>
  );
}

export default Student;
