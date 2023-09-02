import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header"
import {useSelector} from 'react-redux'
import { Container } from 'react-bootstrap';

//import MetaData from '../layout/MetaData'

const Profile = () => {
  let user = localStorage.getItem("user-info");
console.log(user);
  return (
    <div>
    <Header/>
  <Container className='container-lg'>
    This is your profile page 

  </Container>

    </div>
  )
}

export default Profile
