import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi'
import { BiHash } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { FaBookmark } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { CgMoreO } from 'react-icons/cg'
import { CgMoreAlt } from 'react-icons/cg'
import l from './Left.module.css'



export default function Left() {
  return (
    <div className={l.main_container}>
      <div className={l.box}>
        <div className={l.contents}>
            <div className={l.content}><BsTwitter className={l.tlogo}/></div>
            <div className={l.content}><BiHomeCircle className={l.logo}/> <span>Home</span></div>
            <div className={l.content}><BiHash className={l.logo}/><span>Explore</span></div>
            <div className={l.content}><GrNotification className={l.logo}/><span>Notification</span></div>
            <div className={l.content}><HiOutlineMail className={l.logo}/><span>Messages</span></div>
            <div className={l.content}><FaBookmark className={l.logo}/><span>Bookmarks</span></div>
            <div className={l.content}><FaTwitterSquare className={l.tlogo}/><span>Twitter Blue</span></div>
            <div className={l.content}><CgProfile className={l.logo}/><span>Profile</span></div>
            <div className={l.content}><CgMoreO className={l.logo}/><span>More</span></div>
            <div><button className={l.tbtn}>Tweet</button></div>
        </div>
        <div className={l.pro}>
            <div className={l.img}><img src="https://tse4.mm.bing.net/th?id=OIP.Ii15573m21uyos5SZQTdrAHaHa&pid=Api&P=0" alt="" /></div>
            <div className={l.name}><p>BapiMajumder</p><p>BapiMajumder</p></div>
            <div className={l.more}><CgMoreAlt/></div>
        </div>
      </div>
    </div>
  )
}
