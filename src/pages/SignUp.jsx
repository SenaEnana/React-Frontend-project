import { useState } from "react";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CloseSig from "../components/CloseSig";
import Input from "../components/Input";
import Label from '../components/Label';
// import PasswordMatch from '../components/PasswordMatch';

const SignUp = () => {
let history = useHistory();
  // const [showS,setSignUp] = useState(false);
  const [email,setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };


  return (
    <div>
      <h4 className="text-danger">Please fill the form correctly</h4>
      {/* <div className="container bg-primary mt-3 rounded">
      <button className="btn btn-primary w-100" onClick={() =>{history.push('/login')}}>Already have an account?</button>
      </div> */}
       
         <CloseSig/> 
         <Label  title="Full Name" type="text" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your full name" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
       <Label title="Email" type="email"className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your email" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" onChange={handleChange}/>
      {error && <h6 style={{color: 'red'}}>{error}</h6>}
       <Label title="PhoneNo" type="number" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your phone number" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
       <Label title="Address" type="text" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your address" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
{/* <PasswordMatch /> */}
       <Label title="Password" type="password" className='float-start fs-5 text-dark fw-bold'/>
        <Input placeHolder="Enter your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/> 
        <Label title="Confirm Password" type="password" className='float-start fs-5 text-dark fw-bold'/>
        <Input placeHolder="Confirm your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
         <Input type="submit" value="submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit" onClick={()=> {
             history.push('/additional');
            }}/>
    </div>
  )
}

export default SignUp
