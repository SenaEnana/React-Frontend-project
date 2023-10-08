import { NavLink } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { MdCreateNewFolder } from "react-icons/md";
import { BsFillHouseDashFill } from "react-icons/bs";
function Sidebar() {
  return (
    <>
      <div className="vh-100 bg-light border">
        <ul className="list-group border-0 pt-3 bg-secondary">
          <NavLink to={"/"} className="list-group-item text-start">
            <BsFillHouseDashFill className="me-2" size={30} />
            Dashboard
          </NavLink>
          <NavLink to={"/teachers"} className="list-group-item text-start">
            <GiTeacher className="me-2" size={30} />
            Teachers
          </NavLink>
          <NavLink to={"/createTeacher"} className="list-group-item text-start">
            <MdCreateNewFolder className="me-2" size={30} />
            Create Teachers
          </NavLink>
          <NavLink to={"/students"} className="list-group-item text-start">
            <PiStudentFill className="me-2" size={30} />
            Students
          </NavLink>
          <NavLink to={"/createStudent"} className="list-group-item text-start">
            <MdCreateNewFolder className="me-2" size={30} />
            Create Students
          </NavLink>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
