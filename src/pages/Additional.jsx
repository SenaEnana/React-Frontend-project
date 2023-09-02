import React, { useState } from 'react'
import Input from "../components/Input";
import CloseTec from '../components/CloseTec';
import Button from '../components/Button';
import Select from '../components/Select';
//import ForgotPassword from "../components/ForgotPassword";
import Label from '../components/Label';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Additional = () => {
let history = useHistory();

  const [expert,setExpert] = useState("");
  const [subject,setSubject] = useState("");
  const [time,setTime] = useState(""); 
  const [password,setPassword] = useState("");
  const [select,setSelect] = useState("");

async function register()
{
  let item = {expert,select,subject,time,password};
console.warn(item); 
history.push('/profile');

let result = await fetch("http://127.0.0.1:8000/api/addition",{
 method:"POST",
 body:JSON.stringify(item),
 headers:{
    "Content-Type":"application/json",
   "Accept":"application/json"
  }
})
result = await result.json();
localStorage.setItem("user-add-info",JSON.stringify(result));
alert("Congratulation your registration is successfully done");
}

  return (
    <div className='m-0'>
     <h2 className="text-dark">Additional Information</h2>
   <h2 className='text-danger fs-4'>Notice <i className='fa fa-hand-o-down fs-4 p-2'></i></h2> <p className='fs-4 fw-light text-info'>If you have no answer to fill some of the fields but not all of them you can type 'NULL'
   but don't leave empty space because your form may not be submitted. Thank you!</p>
   <Button title="Back" 
         className="btn btn-sm m-1 fw-lighter rounded bg-danger fs-5 p-1 float-end" 
          onClick={() =>{history.push('/signUp')
        }}/>  
    
     {/* <Button title="Teach" 
         className="btn btn-sm m-1 fw-lighter rounded bg-danger fs-5 p-1 float-end" 
          onClick={() =>{
          setShowTeach(true);
        }}/> 
           <Button title="Study" 
            className="btn btn-sm m-1 fw-lighter rounded bg-success fs-5 p-1 float-end"
            onClick={() =>{
            setShowStudy(true);
        }}/>        */}
        <CloseTec/>
         <Label  title="Education" className='float-start fs-5 text-dark fw-bold'/>
    <Select value={select} onChange={(e) => setSelect(e.target.value)}/>
    <Label  title="Expert" className='float-start fs-5 text-dark fw-bold'/>
    <Input type="expert" placeHolder="please enter your expert" 
            value={expert} onChange={(e) => setExpert(e.target.value)}
            className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>

<Label title="Subject" className='float-start fs-5 text-dark fw-bold'/>
<Input type="subject"
   placeHolder="please enter the field you want to study"
   value={subject} onChange={(e) => setSubject(e.target.value)} 
   className="bg-white p-1 m-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
   <Label title="Study Time" className='float-start fs-5 text-dark fw-bold'/>
<Input type="time" 
   placeHolder="please enter the time you want to study" 
   value={time} onChange={(e) => setTime(e.target.value)} 
   className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>

              <Label title="Password" className='float-start fs-5 text-dark fw-bold'/>
         <Input type="password" placeHolder="please enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)} 
            className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
         <Input type="submit" value="Submit" 
            className="btn btn-sm p-1 bg-success fw-bold fs-5 submit"
            onClick={register}/>
          {/* <ForgotPassword/> */}
      
    </div>
     
  )
}

export default Additional;

//below are the codes for the teaching and studying button 
// const [showTeach,setShowTeach] = useState(false);
// const [showStudy,setShowStudy] = useState(false);

//These are the code for the teaching button luv uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
// {/* <Button title="Teach" 
// className="btn btn-sm m-1 fw-lighter rounded bg-danger fs-5 p-1 float-end" 
//  onClick={() =>{
//  setShowTeach(true);
// }}/>
// {showTeach && <CloseTec closeTeach={setShowTeach}/>}
// {showTeach && <Label  title="Education" className='float-start fs-5 text-dark fw-bold'/>}
// {showTeach && <Select value={select} onChange={(e) => setSelect(e.target.value)}/>}
// {showTeach && <Label  title="Expert" className='float-start fs-5 text-dark fw-bold'/>}
// {showTeach && <Input type="expert" placeHolder="please enter your expert" 
//    value={expert} onChange={(e) => setExpert(e.target.value)}
//    className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} */}
// {showTeach && <Label title="Password" className='float-start fs-5 text-dark fw-bold'/>}
// {showTeach && <Input type="password" placeHolder="please enter your password"
//     value={password} onChange={(e) => setPassword(e.target.value)} 
//     className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
// {showTeach && <Input type="submit" value="Submit" 
//     className="btn btn-sm p-1 bg-success fw-bold fs-5 submit"
//     onClick={register}/>}
// {showTeach &&  <ForgotPassword/>}


//These are the code for the studying button 
// <Button title="Study" 
//     className="btn btn-sm m-1 fw-lighter rounded bg-success fs-5 p-1 float-end"
//     onClick={() =>{
//     setShowStudy(true);
// }}/>
// {showStudy && <CloseStu closeStudy={setShowStudy}/>}
// {showStudy && <Label title="Subject" className='float-start fs-5 text-dark fw-bold'/>}
// {showStudy && <Input type="subject"
//    placeHolder="please enter the field you want to study"
//    value={subject} onChange={(e) => setSubject(e.target.value)} 
//    className="bg-white p-1 m-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} 
//    {showStudy && <Label title="Study Time" className='float-start fs-5 text-dark fw-bold'/>}
// {showStudy && <Input type="time" 
//    placeHolder="please enter the time you want to study" 
//    value={time} onChange={(e) => setTime(e.target.value)} 
//    className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} 
   
//    {showStudy && <Label title="Password" className='float-start fs-5 text-dark fw-bold'/>}
// {showStudy && <Input type="password" placeHolder="please enter your password" 
//    value={password} onChange={(e) => setPassword(e.target.value)} 
//    className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
// {showStudy && <Input type="submit" value="Submit" 
//    className="btn btn-sm p-1 bg-success fw-bold fs-5 submit"
//    onClick={register}/>}
// {showStudy && <ForgotPassword/>}   