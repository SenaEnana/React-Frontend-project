import { useState } from "react";
// import axios from "../api/axios";
import CloseLog from "../components/CloseLog";
import Input from "../components/Input";
import Label from '../components/Label';
import ForgotPassword from "../components/ForgotPassword";
import AuthUser from "./AuthUser";

const Login = () => {
  // let history = useHistory();
  const {http,setToken} = AuthUser();
    const [email,setEmail] = useState("");
    const [error, setError] = useState(null);
const [password, setPassword] = useState("");

const handleLogin = () =>{
  //api call
  http.post('/login',{email:email,password:password}).then((res)=>{
    // console.log(res.data);
    setToken(res.data.user,res.data.access_token);
  })
}

// const handleLogin = async(event) =>{
//   event.preventDefault();
//   try{
// await axios.post('/login', {email, password});
// setEmail("");
// setPassword("");
// history.push('/');
//   }catch(e){
// console.log(e);
//   }
// };
// handleLogin

// function isValidEmail(email) {
    //   return /\S+@\S+\.\S+/.test(email);
    // }
  
    // const handleChange = event => {
    //   if (!isValidEmail(event.target.value)) {
    //     setError('Email is invalid');
    //   } else {
    //     setError(null);
    //   }
    //   setEmail(event.target.value);
    // };
  return (
    <div>
      <form method="post" action="/login">
         <CloseLog/>
         <Label title="Email" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter your email"  type="email" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" onSubmit={handleLogin} value={email} onChange={(e) => setEmail(e.target.value)}/>
       {error && <h6 style={{color: 'red'}}>{error}</h6>}
        <Label title="Password" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter your password" type="password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" onSubmit={handleLogin} value={password} onChange={(e) =>setPassword(e.target.value)}/>
         <Input type="submit" value="login" className="btn btn-sm p-1 bg-info fw-bold fs-5 submit" onSubmit={handleLogin}/>
         <ForgotPassword/>
         </form>
    </div>
  )
}

export default Login
