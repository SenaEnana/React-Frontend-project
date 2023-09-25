import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar bg-light border col-12 overflow-none">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-brand ms-3">
          STA
        </Link>
        <form className="d-flex" role="search">
          <div>
            <BiSolidUser
              className="bg-white p-1 rounded-5 border user"
              size={45}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
