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
      <button className="btn btn-primary d-block"> logout</button>
        </div>
          </div>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;



{/* <NavDropdown className="p-1 fs-4 fw-light profile" title="Profile">
<div className='user bg-dark'>                
<i className=" fa fa-user fa-2x text-warning p-2 ms-4" 
onClick={() =>{history.push('/profile');}}></i> 

    <Button title="Logout" 
     className="btn btn-lg btn-dark fs-5 p-1 ms-4 mt-0"
     onClick={logOut}/>
 </div>
</NavDropdown> 

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button';


  let history = useHistory();
  let user = JSON.parse(localStorage.getItem('user-info'));
  function logOut(){
    localStorage.clear();
    history.push('/');

*/}