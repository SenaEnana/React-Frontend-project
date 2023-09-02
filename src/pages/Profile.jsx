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
    
    {/* window.onload = function () {
            document.getElementById('first').innerText = localStorage.getItem('name');
            document.getElementById('second').innerText = localStorage.getItem('email');
            document.getElementById('third').innerText = localStorage.getItem('phoneNo');
            document.getElementById('fourth').innerText = localStorage.getItem('address');
            document.getElementById('five').innerText = localStorage.getItem('password');
            document.getElementById('six').innerText = localStorage.getItem('passwordC');
            document.getElementById('seven').innerText = localStorage.getItem('education');
            document.getElementById('eight').innerText = localStorage.getItem('expert');
            document.getElementById('nine').innerText = localStorage.getItem('subject');
            document.getElementById('ten').innerText = localStorage.getItem('time');

        }; */}
  </Container>

    </div>
  )
}

export default Profile
