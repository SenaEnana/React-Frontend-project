import { NavLink } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { BsFillHouseDashFill } from "react-icons/bs";

const TeacherSidebar = () => {
  return (
    <div className="vh-100 bg-light border">
      <ul className="list-group border-0 pt-3 bg-secondary">
        <NavLink
          to={"/studentDashboard"}
          className="list-group-item text-start"
        >
          <BsFillHouseDashFill className="me-2" size={30} />
          Dashboard
        </NavLink>
        <NavLink to={"/student"} className="list-group-item text-start">
          <PiStudentFill className="me-2" size={30} />
          Students
        </NavLink>
      </ul>
    </div>
  );
};

export default TeacherSidebar;
