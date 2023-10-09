import { NavLink } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { MdCreateNewFolder } from "react-icons/md";
import { BsFillHouseDashFill } from "react-icons/bs";

const StudentSidebar = () => {
  return (
    <div className="vh-100 bg-light border">
      <ul className="list-group border-0 pt-3 bg-secondary">
        <NavLink to={"/"} className="list-group-item text-start">
          <BsFillHouseDashFill className="me-2" size={30} />
          Dashboard
        </NavLink>
        <NavLink to={"/teacher"} className="list-group-item text-start">
          <GiTeacher className="me-2" size={30} />
          Teacher
        </NavLink>
        <NavLink to={"/student"} className="list-group-item text-start">
          <PiStudentFill className="me-2" size={30} />
          Student
        </NavLink>
      </ul>
    </div>
  );
};

export default StudentSidebar;
