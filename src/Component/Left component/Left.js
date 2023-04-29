import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg'
import l from './Left.module.css'
import { LeftData } from './LeftData';
import { useSelector, useDispatch } from "react-redux";

export default function Left() {
  const user = useSelector(state => state.user);
  return (
    <div className={l.main_container}>
      <div className={l.box}>
        <div className={l.contents}>
          <div className={l.tlogo}><BsTwitter /></div>
          {LeftData.map((e) => {
            return (
              <div key={Math.random()} className={l.content}>{e.icon}{e.text}</div>)
          })}
          <div><button className={l.tbtn}>Tweet</button></div>
        </div>
        <div className={l.pro}>
          <div className={l.img}><img src="https://tse4.mm.bing.net/th?id=OIP.Ii15573m21uyos5SZQTdrAHaHa&pid=Api&P=0" alt="" /></div>
          <div className={l.name}><p>{user.name}</p><p>{user.username}</p></div>
          <div className={l.more}><CgMoreAlt /></div>
        </div>
      </div>
    </div>
  )
}
