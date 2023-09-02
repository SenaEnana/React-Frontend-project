import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button';

const Header = () => {
  let history = useHistory();
  let user = JSON.parse(localStorage.getItem('user-info'));
  function logOut(){
    localStorage.clear();
    history.push('/');
  }
   return (
<div>
<Navbar collapseOnSelect expand='md' variant='lighter' 
className='bg-dark float-center'>
  <Navbar.Toggle aria-controls="basic-navbar-nav" 
  className='fw-bold bg-warning'/>
        <h2 className="fw-light m-1 text-danger p-5">Welcome!!!</h2>
    <Navbar.Collapse id="basic-navbar-nav" 
    className='fw-bold p-1'>
    <div className="float-start">
      <Nav>
      <NavLink eventKey="1" as={Link} to="/" 
      className="text-decoration-none p-2 m-3 text-warning fs-4 fw-light navLink">
        Home
        </NavLink>
         <NavLink eventKey="2" as={Link} to="/about" 
         className="text-decoration-none p-2 m-3 text-warning fs-4 fw-light navLink">
            About
            </NavLink>
        <NavDropdown className="p-0 m-3 fs-4 fw-light bg-body-tertiary rounded" title="Services">
          <NavDropdown.Item as={Link} to="/teaching" 
          className="text-decoration-none pe-1 mb-2 text-warning fs-4 fw-light navLink">
           Teacher
            </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/studying" 
          className="text-decoration-none pe-1 mb-2 text-warning fs-4 fw-light navLink">
           Student
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink eventKey="3" as={Link} to="/contact" 
         className="text-decoration-none p-2 m-3 text-warning fs-4 fw-light navLink">
            Contact
            </NavLink>
      </Nav>
      </div> 
    </Navbar.Collapse>
</Navbar>
{
   localStorage.getItem('user-info') ?
   <>
       {/* <div className='user'>
<i className=" fa fa-user fa-2x text-warning p-5 mb-3" 
onClick={() =>{history.push('/profile');}}></i>  
</div> */}
<NavDropdown className="p-1 fs-4 fw-light profile" title="Profile">
<div className='user bg-dark'>                
<i className=" fa fa-user fa-2x text-warning p-2 ms-4" 
onClick={() =>{history.push('/profile');}}></i> 

    <Button title="Logout" 
     className="btn btn-lg btn-dark fs-5 p-1 ms-4 mt-0"
     onClick={logOut}/>
 </div>
</NavDropdown>

   </> 
   :
   <>

   </>
}
       
<NavLink eventKey="6" as={Link} to="/information" 
className="text-decoration-none p-2 text-primary fs-4 fw-light how">
 How it works?
 </NavLink> 
</div> 
  );
}

export default Header