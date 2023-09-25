import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";

function Navbar() {

const [isActive, setIsActive] = useState({
  id: 'divOne',
})
useEffect(() => {
  console.log(isActive)
}, [isActive])
const hideShowDiv = (e) => {
  setIsActive({
    id: e.target.id,
  })
}
  return (
    <nav className="navbar bg-light border col-12 overflow-none">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-brand ms-3">
          STA
        </Link>
        <form className="d-flex" role="search">
          <div>
            <BiSolidUser
            id="user-info"
              className="bg-white p-1 rounded-5 border user"
              size={45}
              onClick={(e) => {
                hideShowDiv(e)
              }} />

        <div
          className={isActive.id === 'user-info' ? `user-info` : 'user-div d-none'}
        >
             <Link to={"/profile"} className="navbar-brand ms-3 d-block">
          profile
        </Link>
      <button className="btn btn-primary d-block">sign out</button>
        </div>
          </div>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
