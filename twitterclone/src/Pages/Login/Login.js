import React, { useState } from 'react'
import l from './Login.module.css'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";




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
    <div className={l.main}>
      {Login === true ?
        <div className={l.box}>
          <form className={l.form} onSubmit={(e) => e.preventDefault()} >
            <div className={l.logo}><BsTwitter /></div>
            <h2>Sign in to Twitter</h2>
            <div>
              <button className={l.connect}><FcGoogle /> Sign in with Google</button>
              <button className={l.connect}><BsApple /> Sign in with Apple</button>
            </div>

            <button></button>
            <div className={l.inputDiv}>

              <TextField className={l.input} type='email' placeholder='Email' onChange={LoginHandler} value={Loginuser.email} name='email' id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div className={l.inputDiv}>
              <TextField className={l.input} type='password' placeholder='Password' onChange={LoginHandler} value={Loginuser.password} name='password' id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <Button className={l.btnLogin} variant="contained" disableElevation>
              Log in
            </Button>
            <div>
              <Button className={l.btnSignup} variant="contained" disableElevation onClick={() => setLogin(false)} >Not a User? SignUp!</Button>
            </div>

          </form>

        </div>

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
