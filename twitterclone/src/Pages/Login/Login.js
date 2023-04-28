import React, { useState, useEffect } from 'react'
import l from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { add_user, add_tweet } from '../../Component/Redux/actions';

export default function Login() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [Loginuser, setLoginuser] = useState({ email: '', password: '' });
  const updatedUsers = JSON.parse(localStorage.getItem("User")) || [];


  function LoginHandler(e) {
    const { name, value } = e.target;
    setLoginuser({ ...Loginuser, [name]: value });
  };

  function loggedUser() {
    const access = updatedUsers.find(val => val.email === Loginuser.email && val.password === Loginuser.password);
    if (access) {
      dispatch(add_user(access))
      Navigate("/Home")
    } else {
      console.log("No you are not logged in now.");
    }
  };


  return (
    <div className={l.main}>
      <div className={l.box}>
        <form className={l.form} onSubmit={(e) => e.preventDefault()} >
          <div className={l.logo}><BsTwitter /></div>
          <h2>Sign in to Twitter</h2>
          <div>
            <button className={l.connect}><FcGoogle /> Sign in with Google</button>
            <button className={l.connect}><BsApple /> Sign in with Apple</button>
          </div>
          <div className={l.or}>
            <hr />

            <span>or</span>
            <hr />
          </div>
          <div className={l.inputDiv}>
            <TextField className={l.input} type='email' placeholder='Email' onChange={LoginHandler} value={Loginuser.email} name='email' id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div className={l.inputDiv}>
            <TextField className={l.input} type='password' placeholder='Password' onChange={LoginHandler} value={Loginuser.password} name='password' id="outlined-basic" label="Password" variant="outlined" />
          </div>
          <Button className={l.btnLogin} variant="contained" disableElevation onClick={loggedUser}>
            Log in
          </Button>
          <div>
            <Button className={l.btnSignup} variant="contained" disableElevation onClick={() => Navigate('/Signup')} >Not a User? SignUp!</Button>
          </div>

        </form>

      </div>
    </div >
  )
}
