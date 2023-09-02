import {Nav,Navbar,NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NewNavbar = () => {
   let history = useHistory();
  return (
    <div className="navbarComponents">
    <Navbar collapseOnSelect expand='md' variant='lighter' 
    className='bg-dark float-center'>
     <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'
     className='fw-bold bg-warning'/>
     <h2 className="fw-light m-1 text-danger float-center p-3">Welcome!!!</h2>
     <Navbar.Collapse id='navbarScroll' className='fw-bold text-dark'>
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
             <NavLink eventKey="3" as={Link} to="/contact"
              className="text-decoration-none p-2 m-3 text-warning fs-4 fw-light navLink">
                Contact
                </NavLink>
             <NavLink eventKey="5" as={Link} to="/services"
              className="text-decoration-none p-2 m-3 text-warning fs-4 fw-light navLink">
                Services
                </NavLink>
              {/* <NavLink eventKey="5" as={Link} to="/additional" 
              className="text-decoration-none p-2 m-3 text-warning fs-4 fw-light navLink">
              Additional
              </NavLink>
              <NavLink eventKey="7" as={Link} to="/profile" 
              className="text-decoration-none p-2 m-3  text-warning fs-4 fw-light navLink">
              Profile
              </NavLink> */}
         </Nav>  
         </div>      
     </Navbar.Collapse>
    </Navbar>
    <div className='user'>
     <i className=" fa fa-user fa-2x text-warning p-5 mb-3" 
     onClick={() =>{history.push('/profile');}}></i>  
     </div>
     <NavLink eventKey="6" as={Link} to="/information" 
     className="text-decoration-none p-2 text-primary fs-4 fw-light how">
      How it works?
      </NavLink> 
</div>
  )
}

export default NewNavbar 
