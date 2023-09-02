import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ForgotPassword = () => {
  let history = useHistory();
  return (
    <div className='container d-flex rounded'>
      <h4 className='fs-5 text-primary m-1'>Forgot Password?</h4>
    <i className='fa fa-hand-o-right fs-4 p-2 text-primary'></i>
      <button className='btn btn-success text-dark ms-5 mb-2 p-1'onClick={() =>{history.push('/reset')}}>Reset Password?</button>
    </div>
  )
}

export default ForgotPassword