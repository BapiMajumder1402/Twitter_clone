import React, { useState } from 'react'
import l from './Login.module.css'

export default function Login() {
  const [Login, setLogin] = useState(true);
  const [Loginuser, setLoginuser] = useState({ email: '', password: '' });
  const [Signupuser, setSignupuser] = useState({ id: Math.random(), name: '', phone: '', email: '', password: '', repassword: '' });

  function LoginHandler(e) {
    const { name, value } = e.target;
    setLoginuser({ ...Loginuser, [name]: value });
  }

  function SignupHandler(e) {
    const { name, value } = e.target;
    setSignupuser({ ...Signupuser, [name]: value });
  }
  function loggedUser() {
    console.log(Loginuser);
  }
  function SignedUser() {
    localStorage.setItem("User", JSON.stringify(Signupuser))
  }
  return (
    <div>
      {Login === true ?
        <form onSubmit={(e) => e.preventDefault()} >
          <input type='email' placeholder='Email' onChange={LoginHandler} value={Loginuser.email} name='email' />
          <input type='password' placeholder='Password' onChange={LoginHandler} value={Loginuser.password} name='password' />
          <button onClick={loggedUser} >Login</button>
          <button button onClick={() => setLogin(false)} >Not a User? SignUp!</button>
        </form>
        :
        <form onSubmit={(e) => e.preventDefault()} >
          <input type='text' placeholder='Name' onChange={SignupHandler} value={Signupuser.name} name='name' />
          <input type='number' placeholder='Mobile Number' onChange={SignupHandler} value={Signupuser.phone} name='phone' />
          <input type='email' placeholder='Email' onChange={SignupHandler} value={Signupuser.email} name='email' />
          <input type='password' placeholder='Password' onChange={SignupHandler} value={Signupuser.password} name='password' />
          <input type='password' placeholder='Confirm Password' onChange={SignupHandler} value={Signupuser.repassword} name='repassword' />
          <button onClick={SignedUser} > Signup </button>
          <button onClick={() => setLogin(true)} > Back to Login </button></form>}
    </div >
  )
}
