import React from 'react'
import n from './Nav.module.css'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
    const Navigate =useNavigate()
    const clickHandler =()=>{
        Navigate('/Login')
    }
  return (
    <nav className={n.main}>
      <div>Logo</div>
      <div>
        <button onClick={clickHandler}>Signup</button>
      </div>
    </nav>
  )
}
