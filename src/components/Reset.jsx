import React from 'react'
import Input from './Input'
import Label from './Label'


const Reset = () => {
  return (
    <div className='container mt-5 rounded'>
      <h4 className='text-danger container mb-0 p-3 rounded'>Type the password you can remember</h4>
         <Label title="Email" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter your email"  type="email" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
        <Label title="Old password" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter old password" type="password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
         <Label title="New password" className='float-start p-1 fs-5 text-dark fw-bold'/>
         <Input placeHolder="Enter new password" type="password" className="bg-white p-1 fs-6 text-bold form-control form-control-lg teacher-info"/>
         <Input type="submit" value="Submit" className='btn btn-danger text-dark' onClick={() =>{alert('you are successfully reset your password')}}/>
    </div>
  )
}

export default Reset
