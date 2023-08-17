import  { useState } from 'react'
import Input from "../components/Input";
import CloseTec from '../components/CloseTec';
import Button from '../components/Button';
import Select from '../components/Select';
import CloseStu from '../components/CloseStu';
import ForgotPassword from "../components/ForgotPassword";

const Additional = () => {
  const [showTeach,setShowTeach] = useState(false);
  const [showStudy,setShowStudy] = useState(false);
  return (
    <div className='m-0'>
     <h1 className="text-danger">This is Additional Page</h1>
   
     <Button title="Teach" className="btn btn-sm m-1 fw-lighter rounded bg-danger fs-5 p-1 float-end" onClick={() =>{
          setShowTeach(true);
        }}/>
        {showTeach && <CloseTec closeTeach={setShowTeach}/>}
        {showTeach && <Select/>}
        {showTeach && <Input title="Expert" type="expert" placeHolder="please enter your expert" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
        {showTeach && <Input title="Password" type="password" placeHolder="please enter your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
        {showTeach && <Input type="submit" value="Submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit"/>}
        {showTeach &&  <ForgotPassword/>}
        <Button title="Study" className="btn btn-sm m-1 fw-lighter rounded bg-success fs-5 p-1 float-end" onClick={() =>{
          setShowStudy(true);
        }}/>
{showStudy && <CloseStu closeStudy={setShowStudy}/>}
{showStudy && <Input title="Subject" type="subject" placeHolder="please enter the field you want to study" className="bg-white p-1 m-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} 
{showStudy && <Input title="Study Time" type="time" placeHolder="please enter the time you want to study" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>} 
{showStudy && <Input title="Password" type="password" placeHolder="please enter your password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>}
        {showStudy && <Input type="submit" value="Submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit"/>}
        {showStudy && <ForgotPassword/>}
    </div>
     
  )
}

export default Additional;
 
