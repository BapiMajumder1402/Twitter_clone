import React, { useState } from 'react'
import s from "./Signuppage.module.css"
import { useNavigate } from 'react-router-dom'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
    return (<div className={s.main}>
        <div className={s.box}>

            <form className={s.form} onSubmit={(e) => e.preventDefault()} >
                <h2>Create Your Account</h2>
                <TextField className={s.input} id="outlined-basic" label="Name" variant="outlined" type='text' placeholder='Name' onChange={SignupHandler} value={Signupuser.name} name='name' />
                <TextField className={s.input} id="outlined-basic" label="Phone" variant="outlined" type='number' placeholder='Mobile Number' onChange={SignupHandler} value={Signupuser.phone} name='phone' />
                <TextField className={s.input} id="outlined-basic" label="Email" variant="outlined" type='email' placeholder='Email' onChange={SignupHandler} value={Signupuser.email} name='email' />
                <TextField className={s.input} id="outlined-basic" label="Password" variant="outlined" type='password' placeholder='Password' onChange={SignupHandler} value={Signupuser.password} name='password' />
                <TextField className={s.input} id="outlined-basic" label="Confirm password" variant="outlined" type='password' placeholder='Confirm Password' onChange={SignupHandler} value={Signupuser.repassword} name='repassword' />
                {/* <DatePicker label="Basic date picker" /> */}
                <Button className={s.btnLogin} variant="contained" disableElevation onClick={SignedUser} > Signup </Button>
                <Button className={s.btnSignup} variant="contained" disableElevation onClick={() => Navigate("/")} > Back to Login </Button >
            </form>
        </div>
    </div>)
}
export default SignupPage;