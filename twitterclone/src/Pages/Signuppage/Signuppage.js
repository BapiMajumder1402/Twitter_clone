import React, { useState } from 'react'
import s from "./Signuppage.module.css"
import { useNavigate } from 'react-router-dom'

function SignupPage() {
    const Navigate = useNavigate()
    const updatedUsers = JSON.parse(localStorage.getItem("User")) || []
    const [Signupuser, setSignupuser] = useState({ id: Math.random(), name: '', phone: '', email: '', password: '', repassword: '' });
    function SignupHandler(e) {
        const { name, value } = e.target;
        setSignupuser({ ...Signupuser, [name]: value });
    }
    function SignedUser() {
        const data = [...updatedUsers, Signupuser]
        localStorage.setItem("User", JSON.stringify(data));
        setSignupuser({ id: Math.random(), name: '', phone: '', email: '', password: '', repassword: '' });
    }
    function navigationHandler() {
        Navigate("/")
    }
    return (<div>
        <form onSubmit={(e) => e.preventDefault()} >
            <input type='text' placeholder='Name' onChange={SignupHandler} value={Signupuser.name} name='name' />
            <input type='number' placeholder='Mobile Number' onChange={SignupHandler} value={Signupuser.phone} name='phone' />
            <input type='email' placeholder='Email' onChange={SignupHandler} value={Signupuser.email} name='email' />
            <input type='password' placeholder='Password' onChange={SignupHandler} value={Signupuser.password} name='password' />
            <input type='password' placeholder='Confirm Password' onChange={SignupHandler} value={Signupuser.repassword} name='repassword' />
            <button onClick={SignedUser} > Signup </button>
            <button onClick={navigationHandler} > Back to Login </button >
        </form>
    </div>)
}
export default SignupPage;