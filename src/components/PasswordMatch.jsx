import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";
  
  const PasswordMatch = () => {
    let history = useHistory();

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mandatory')
      .min(8, 'Password must be at least 8 character'),
    confirmPwd: Yup.string()
      .required('Password is mandatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
  return (
    <div className='container p-1 container-lg bg-lighter rounded'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label type='password' className='float-start fs-5 text-dark fw-bold'>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            placeHolder='Enter your password'
            // className = "bg-white p-2 fs-6 text-bold form-control form-control-lg teacher-info"
            className={`bg-white p-2 fs-6 text-bold form-control form-control-lg teacher-info ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
          <label type='password' className='float-start fs-5 text-dark fw-bold'>Confirm Password</label>
          <input
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            //className = ""
            placeHolder='Confirm your password'
            className={`bg-white p-2 fs-6 text-bold form-control form-control-lg teacher-info  ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        <input type="submit" value="submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit" onClick={()=> {history.push('/additional'); }}  /> 
      </form>
    </div>
  )
}
    
  export default PasswordMatch
  
  // {showS && <Input type="submit" value="submit" className="btn btn-sm p-1 bg-success fw-bold fs-5 submit" onClick={()=> {
  //   history.push('/additional');
  //  }}/>} 