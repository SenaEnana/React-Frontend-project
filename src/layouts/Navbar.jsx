import { BiSolidUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  function logOut() {
    localStorage.removeItem("user-login");
    navigate("/");
  }
  return (
    <div>
      <Navbar collapseOnSelect variant="lighter" className="float-center">
        <div className="float-start">
          <Nav>
            <Link to={"/"} className="navbar-brand ms-3">
              STA
            </Link>
          </Nav>
        </div>
        {localStorage.getItem("user-login") ? (
          <Nav>
            <BiSolidUser className="fs-1 user-icon" />
            <NavDropdown
              className="p-1 fs-4 fw-light profile"
              title={user.name}
            >
              <Link to={"/profile"} className="dropdown-item ps-1 m-1">
                Profile
              </Link>
              <button
                className="btn btn-md btn-outline-primary ms-1 mt-1"
                onClick={logOut}
              >
                sign out
              </button>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}
export default NavBar;
