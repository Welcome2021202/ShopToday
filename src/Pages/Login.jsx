import React from 'react';
import './Style/Login.css'

function Login() {
  return (
    <>
      <div className='sign-up-page'>
        <div className="heading-signup">
          <h1>Sign Up</h1>
        </div>
        <div className="login-sigin">
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <input type='password' placeholder='Your Password' />
        </div>
        <div className="btn-continue">
          <button>Continue</button>
        </div>
        <div className="already-account">
          <p>Already Have an account ?<span>LogIn Here</span></p>
        </div>
      </div>
    </>
  )
}

export default Login