import React, {useState} from 'react'
import p from './Post.module.css'
import { RiGalleryLine } from 'react-icons/ri';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { ImLocation } from 'react-icons/im';


export default function Post() {
    const[post,setPost]=useState("")

function handelPost(e){
    setPost(e.target.value)
    console.log(post)
}

    return (
        <div className={p.main}>
            <div className={p.img}>
                <img src="https://tse1.mm.bing.net/th?id=OIP.bTfKGpY95veNESkfsyNaMQHaE8&pid=Api&P=0" alt="" />
            </div>
            <div className={p.post}>
                <div className={p.input}>
                    <textarea onChange={handelPost} placeholder='What is Happening?'></textarea>
                </div>
                <div className={p.bottom}>
                    <div className={p.icons}>
                    <RiGalleryLine className={p.icon}/>
                    <AiOutlineFileGif className={p.icon}/>
                    <BiPoll className={p.icon}/>
                    <BsEmojiSmile className={p.icon}/>
                    <TbCalendarStats className={p.icon}/>
                    <ImLocation className={p.icon}/>
                    </div>
                    <div className={p.tbtn}> <button>Tweet</button> </div>
                </div>
            </div>
        </div>
    )
}
