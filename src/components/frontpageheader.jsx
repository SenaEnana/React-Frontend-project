import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-bootstrap";

const FrontPageHeader = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" variant="lighter" className="w-100">
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
      <NavLink
        eventKey="6"
        as={Link}
        to="/information"
        className="text-decoration-none p-2 text-primary fs-4 fw-light how"
      >
        How it works?
      </NavLink>
    </div>
  );
};

export default FrontPageHeader;
