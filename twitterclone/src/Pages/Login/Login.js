import React, { useState } from 'react'
import l from './Login.module.css'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const Navigate = useNavigate();
  const [Loginuser, setLoginuser] = useState({ email: '', password: '' });
  const updatedUsers = JSON.parse(localStorage.getItem("User")) || [];

  function LoginHandler(e) {
    const { name, value } = e.target;
    setLoginuser({ ...Loginuser, [name]: value });
  }

  function loggedUser() {
    const access = updatedUsers.find(val => val.email === Loginuser.email && val.password === Loginuser.password);
    if (access) {
      console.log("Yes you are logged in now.");
    } else {
      console.log("No you are not logged in now.");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} >
        <input type='email' placeholder='Email' onChange={LoginHandler} value={Loginuser.email} name='email' />
        <input type='password' placeholder='Password' onChange={LoginHandler} value={Loginuser.password} name='password' />
        <button onClick={loggedUser} >Login</button>
        <button button onClick={() => Navigate("/signup")} >Not a User? SignUp!</button >
      </form>
    </div >
  )
}
