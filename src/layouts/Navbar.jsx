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
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              dropdown
              {/* <BiSolidUser /> */}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/profile"} className="dropdown-item" href="#">
                Profile
              </Link>
              <button className="btn btn-primary">sign out</button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;

{
  /* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
      </div> */
}
