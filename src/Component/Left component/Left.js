import React, { useState } from 'react'
import { BsTwitter } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg'
import l from './Left.module.css'
import { LeftData } from './LeftData';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../Redux/actions';
import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';


function Left() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const updatedUsers = JSON.parse(localStorage.getItem("User")) || [];
  const access = updatedUsers.find(val => val.email === user.email && val.password === user.password);

  function clickHandler() {
    access.isLogged = false;
    const logoutStorage = JSON.stringify(updatedUsers);
    localStorage.setItem("User", logoutStorage);
    dispatch(logoutUser());
    Swal.fire({ title: 'Success!', text: 'Succes Fully Loggedout Bye! bye!', icon: 'success', confirmButtonText: 'Ok' });
    Navigate("/");
  }
  ///////MUI////////
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  /////////MUI//////
  return (

    <div className={l.main_container}>
      <div className={l.box}>
        <div className={l.contents}>
          <div className={l.tlogo}><BsTwitter /></div>
          {LeftData.map((e) => {
            return (
              <div key={Math.random()} className={l.content}>{e.icon} <p>{e.text}</p> </div>)
          })}
          <div><button className={l.tbtn}>Tweet</button></div>
        </div>
        <div className={l.pro}>
          <div className={l.img}><img src="https://tse4.mm.bing.net/th?id=OIP.Ii15573m21uyos5SZQTdrAHaHa&pid=Api&P=0" alt="" /></div>
          <div className={l.name}>
            <p>{user.name}</p>
            <span>{user.username}</span>
          </div>


          <div className={l.more}>
            <Button aria-describedby={id} onClick={handleClick}>
              <CgMoreAlt />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }} onClick={clickHandler} className={l.logout}><button value={'logout'} >LogOut {user.username}</button></Typography>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Left;
