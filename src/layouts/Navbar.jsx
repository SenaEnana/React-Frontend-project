import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState({
    id: "divOne",
  });
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };
  return (
    <nav className="navbar bg-light border col-12 overflow-none">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-brand ms-3">
          STA
        </Link>
        <form className="d-flex" role="search">
          <div>
            <div className="dropdown show">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BiSolidUser />
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
