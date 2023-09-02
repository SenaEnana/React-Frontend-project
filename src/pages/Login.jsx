import { useState } from "react";
import CloseLog from "../components/CloseLog";
import Input from "../components/Input";
import Label from '../components/Label';
import ForgotPassword from "../components/ForgotPassword";
import validator from 'validator'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  let history = useHistory();
    
    const [error, setError] = useState(null);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    async function login()
 {
  let item = {email,password};
  console.log(item);
  history.push('/profile');
  let result = await fetch("http://127.0.0.1:8000/api/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(item)
  });
  result = await result.json();
localStorage.setItem("user-info", JSON.stringify(result))
}
    const validateEmail = (e) => {
      var emails = e.target.value;
    
      if (validator.isEmail(emails)) {
        setError('Valid Email :)');
      } else {
        setError('Enter valid Email!');
      }
    }
  
  const submitValidated =(e) =>{
    validateEmail(e);
    setEmail(e.target.value);
  }

  return (
    <div>
         <CloseLog/>
         <Label title="Email" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter your email"  type="email"
          className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"
           value={email} onChange={(e) => submitValidated(e)}/>
       {error && <h6 style={{color: 'red'}}>{error}</h6>}
        <Label title="Password" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter your password" type="password"
          className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"
            value={password} onChange={(e) =>setPassword(e.target.value)}/>
         <Input type="submit" value="login" 
         className="btn btn-sm p-1 bg-info fw-bold fs-5 submit" onClick={login}/>
         <ForgotPassword/>
    </div>
  )
}

export default Login
