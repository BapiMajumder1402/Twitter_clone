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
import Swal from 'sweetalert2';


export default function Login() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [Loginuser, setLoginuser] = useState({ email: '', password: '' });
  const updatedUsers = JSON.parse(localStorage.getItem("User")) || [];
  const access = updatedUsers.find(val => val.email === Loginuser.email && val.password === Loginuser.password);
  const check = updatedUsers.find(val => val.isLogged === true)
  const [error, setError] = useState(false);
  const [errortxt, setErrorTxt] = useState("");
  const [loginerror, setloginerror] = useState(false);
  const [loginerrortxt, setloginErrorTxt] = useState("");

  useEffect(() => { if (check) { Navigate("/home") } }, [updatedUsers]);

  useEffect(() => {
    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (Loginuser.password === "" && Loginuser.email === "") {
      setError(true);
      setErrorTxt("Email and Password are required Feilds");
    } else if (!emailRegex.test(Loginuser.email)) {
      setError(true);
      setErrorTxt("Invalid Email");
    } else if (Loginuser.password.length < 5) {
      setError(true);
      setErrorTxt("Password should be more than 6 characters long");
    } else {
      setError(false);
    }
  }, [Loginuser])

  function LoginHandler(e) {
    const { name, value } = e.target;
    setLoginuser({ ...Loginuser, [name]: value });
  };

  function loggedUser() {
    if (error === false) {
      if (access) {
        access.isLogged = true;
        const updatedUsersJSON = JSON.stringify(updatedUsers);
        dispatch(add_user(access));
        localStorage.setItem("User", updatedUsersJSON);
        Swal.fire({ title: 'Success!', text: 'Welcome to Twitter Made by Bappi and Akhilesh.', icon: 'success', confirmButtonText: 'Ok' });
        Navigate("/Home");
      } else {
        setloginerror(true);
        setloginErrorTxt("Invalid Credentials");
      }
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
          <h2>{error ? errortxt : ""}</h2>
          <h2>{loginerror ? loginerrortxt : ""}</h2>
        </form>

      </div>
    </div >
  )
}
