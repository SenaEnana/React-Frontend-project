import { useState} from "react";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CloseSig from "../components/CloseSig";
import Input from "../components/Input";
import Label from '../components/Label';
import Button from '../components/Button';
import validator from 'validator'

const SignUp = () => { 
let history = useHistory();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNo,setPhoneNo] = useState("");
  const [address,setAddress] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");

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
   
   async function register()
   {
  let item={name,email,phoneNo,address,password};
  console.warn(item); 
  history.push('/additional');

   let result = await fetch("http://127.0.0.1:8000/api/show",{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
       "Content-Type":"application/json",
      "Accept":"application/json"
     }
   })
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringify(result));

  localStorage.setItem("name",JSON.stringify(result.name));
  localStorage.setItem("email",JSON.stringify(result.email));
  localStorage.setItem("phoneNo",JSON.stringify(result.phoneNo));
  localStorage.setItem("address",JSON.stringify(result.address));
  localStorage.setItem("password",JSON.stringify(result.password));

}
  return (
    <div>
      <h4 className="text-danger">Please fill the form correctly</h4>
         {/* <form onSubmit={handleSubmit(onSubmit)}> </form>*/}
         <Button title="Back" 
         className="btn btn-sm m-1 fw-lighter rounded bg-danger fs-5 p-1 float-end" 
          onClick={() =>{history.push('/')
        }}/>  
         <CloseSig/> 
         <Label  title="Full Name" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your full name" type="text"
       className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" 
       value={name} onChange={(e) => setName(e.target.value)}/>
       <Label title="Email" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your email" type="email"
        className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" 
        value={email} onChange={(e) => submitValidated(e)}/>
       <span className="text-danger fw-light"> {error}</span>
       <Label title="PhoneNo" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your phone number" type="number"
        className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"
         value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
       <Label title="Address" className='float-start fs-5 text-dark fw-bold'/>
       <Input placeHolder="Enter your address" type="text" 
       className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"
        value={address} onChange={(e) => setAddress(e.target.value)}/>

        <Label title="Password" className='float-start fs-5 text-dark fw-bold'/>
        <Input placeHolder="Enter your password"  name="password" type="password"
        value={password}  
        onChange={(e) => setPassword(e.target.value)}
         className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>        
        {/* <Label title="Confirm Password" className='float-start fs-5 text-dark fw-bold'/>
        <Input placeHolder="Confirm your password" name="confirmPwd" type="password"
         value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
         className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" />               */}
        <Input type="submit" value="submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit" onClick={register} />   
    </div>
  )
}
export default SignUp

//the code below are for the password match it is not useful that much but if it is
//i will use it

//import { useForm } from 'react-hook-form'
//import { yupResolver } from '@hookform/resolvers/yup'
//import * as Yup from 'yup'
//import PasswordMatch from '../components/PasswordMatch';

//{/* <PasswordMatch /> */}

// const formSchema = Yup.object().shape({
//   password: Yup.string()
//     .required('Password is mandatory')
//     .min(3, 'Password must be at least four character long'),
//   confirmPwd: Yup.string()
//     .required('Password is mandatory')
//     .oneOf([Yup.ref('password')], 'Passwords does not match'),
// })

// const formOptions = { resolver: yupResolver(formSchema) }
//   const { register, handleSubmit, reset, formState } = useForm(formOptions)
//   const { errors } = formState;

//   function onSubmit(data) {
//         console.log(JSON.stringify(data, null, 4))
//      return false
//   }

 //       {/*
//  {...register('password')}
//          className={`bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info
//          ${errors.password ? 'is-invalid' : ''}`}

// {...register('confirmPwd')} 
//          className={`bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info
//          ${errors.confirmPwd ? 'is-invalid' : ''}`} 

//          <div className="invalid-feedback">{errors.password?.message}</div>
//         <div className="invalid-feedback">{errors.confirmPwd?.message}</div> */}