import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/home"} className="navbar-brand">
            SAS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/teachers"} className="nav-link active">
                  Teachers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  Students
                </Link>
                <a href="#"></a>
              </li>
            </ul>
            <form className="row col-6 justify-content-end" role="search">
              <div className="col-3">
                <li className="nav-item">
                  <Link className="nav-link " to={"/signUp"}>
                    sign up
                  </Link>
                  <Link className="nav-link " to={"/singIn"}>
                    sign in
                  </Link>
                </li>
              </div>
              <div className="col-3">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
