// import Navbar from "../components/Navbar"
import {Component} from 'react';
import Image from '../components/Image';
import Header from "../components/Header";

class Services extends Component {
  render(){
    return(
<div>
<Header/>
{/* <h3 class="fs-4 fw-bold text-dark m-5">The services our website give</h3> */}
<div className='mt-5'>
  <h3 class="fs-4 fw-bold text-dark m-5">The services our website give</h3>
<p class="fs-5 mt-5">Our website give easy and simple service without consuming your time.
    In simple if you want to study you can get a teacher or if you want to teach you can also get job here
    within
    short period of time all you have to do is joining our website by login and have an account by Signing Up.
    Thank You For Using Our Website!!!
</p>
</div>
<Image/>
    
</div>

    );
  }
}

export default Services;

