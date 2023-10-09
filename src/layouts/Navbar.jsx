import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

function NavBar() {
  const name = JSON.parse(localStorage.getItem("name"));
  function logOut() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <div>
      {localStorage.getItem("user-login") ? (
        <Navbar variant="lighter" className="float-center">
          <Nav>
            <div className="float-start">
              <Link to={"/"} className="navbar-brand ms-3">
                STA
              </Link>
            </div>
            <BiSolidUser className="fs-1 user-icon" />
            <NavDropdown
              className="pe-1 fs-4 text-dark profile"
              title={"Welcome " + name}
            >
              {/* <Link to={"/profile"} className="dropdown-item p-0 m-1">
                Profile
              </Link> */}
              <button
                className="btn btn-sm btn-outline-primary ms-1 mt-1"
                onClick={logOut}
              >
                sign out
              </button>
            </NavDropdown>
          </Nav>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="md" variant="lighter">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="fw-bold bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="fw-bold p-1">
            <div className="float-start">
              <Nav>
                <NavLink
                  eventKey="1"
                  as={Link}
                  to="/"
                  className="text-decoration-none p-1 m-1 text-dark fs-5 fw-light navLink"
                >
                  Home
                </NavLink>
                <NavLink
                  eventKey="2"
                  as={Link}
                  to="/about"
                  className="text-decoration-none p-1 m-1 text-dark fs-5 fw-light navLink"
                >
                  About
                </NavLink>
                <NavLink
                  eventKey="2"
                  as={Link}
                  to="/service"
                  className="text-decoration-none p-1 m-1 text-dark fs-5 fw-light navLink"
                >
                  Service
                </NavLink>
                <NavLink
                  eventKey="3"
                  as={Link}
                  to="/contact"
                  className="text-decoration-none p-1 m-1 text-dark fs-5 fw-light navLink"
                >
                  Contact
                </NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
}
export default NavBar;
