import React from 'react'
import Header from "../components/Header";
import Image from '../components/Image';
import Button from "../components/Button";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
  let history = useHistory();
  
  return (
    <div>
       <Header/>
       <div className='float-end d-flex mt-4'>
      <Button title="Sign up" className="btn btn-lg bg-warning fs-5 p-1 m-2 float-end d-flex" onClick={()=> {history.push('/signUp'); }}/>
     {/* <Button title="Login" className="btn btn-lg bg-info fs-5 p-1 m-1 float-end" onClick={()=> {history.push('/login'); }}/> */}
   
   <i className='fa fa-hand-o-right fs-4 p-3 float-end d-flex'></i>
   {/* <i className=" fa fa-user fa-2x text-primary"></i>  */}
     <Button title="Already have an account?" className="btn btn-lg fs-5 p-1 m-1 text-info float-end d-flex" onClick={()=> {history.push('/login'); }}/>
     {/* <div className="container bg-primary mt-3 rounded">
      <button className="btn btn-primary w-100" onClick={() =>{history.push('/login')}}>Already have an account?</button>
      </div> */}
     </div>
       <Image/>
    </div>
   
  );
}

export default Home;



//This are the codes that are used for the login and signup button
// const [showS,setSignUp] = useState(false);
//   const [show,setShow] = useState(false);

//     const [email,setEmail] = useState('');
//   const [error, setError] = useState(null);

//   function isValidEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
//   }

//   const handleChange = event => {
//     if (!isValidEmail(event.target.value)) {
//       setError('Email is invalid');
//     } else {
//       setError(null);
//     }
//     setEmail(event.target.value);
//   };

//The code bellow are the code for the sign up button

// {/* <Button title="Sign up" className="btn btn-lg bg-warning fs-5 p-1 m-1 float-end" onClick={() => {
//           setSignUp(true);
//         }}/>
//          {showS && <CloseSig closeSignUp={setSignUp}/> }
//         {showS && <Label  title="Full Name" type="text" className='float-start fs-5 text-dark fw-bold'/>}
//       {showS && <Input placeHolder="Enter your full name" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
//       {showS && <Label title="Email" type="email"className='float-start fs-5 text-dark fw-bold'/>}
//       {showS && <Input placeHolder="Enter your email" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" onChange={handleChange}/>}
//       {error && <h6 style={{color: 'red'}}>{error}</h6>}
//       {showS && <Label title="PhoneNo" type="number" className='float-start fs-5 text-dark fw-bold'/>}
//       {showS && <Input placeHolder="Enter your phone number" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
//       {showS && <Label title="Address" type="text" className='float-start fs-5 text-dark fw-bold'/>}
//       {showS && <Input placeHolder="Enter your address" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} */}
      
      
      
//       {/*{showS && <PasswordMatch />} 
//       {showS && <Label title="Password" type="password" className='float-start fs-5 text-dark fw-bold'/>}
//       {showS && <Input placeHolder="Enter your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} 
//       {showS && <Label title="Confirm Password" type="password" className='float-start fs-5 text-dark fw-bold'/>}
//       {showS && <Input placeHolder="Confirm your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}  */}
//       {/* {showS && <Input type="submit" value="submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit" onClick={()=> {
//             history.push('/additional');
//            }}/>}  */}



//Bellow are the code for the login button and changed now
//  {/* <Button title="Login" className="btn btn-lg bg-info fs-5 p-1 m-1 float-end" onClick={() =>{
//           setShow(true);
//         }}/> 
//          {show && <CloseLog closeLogin={setShow}/>}
//         {show && <Label title="Email" type="email" className='float-start fs-5 text-dark fw-bold'/>}
//         {show && <Input placeHolder="Enter your email" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info" onChange={handleChange}/>}
//        {error && <h6 style={{color: 'red'}}>{error}</h6>}
//        {show && <Label title="Password" type="password" className='float-start fs-5 text-dark fw-bold'/>}
//         {show && <Input placeHolder="Enter your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
//         {show && <Input type="submit" value="login" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit"/>} */}