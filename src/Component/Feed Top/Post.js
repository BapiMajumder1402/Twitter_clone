import React, { useState } from 'react'
import p from './Post.module.css'
import { RiGalleryLine } from 'react-icons/ri';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { ImLocation } from 'react-icons/im';
import { useSelector, useDispatch } from "react-redux";
import { add_post } from '../Redux/actions';



export default function Post() {
    const Dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [post, setPost] = useState({ "id": Math.random(), "content": "", "createdAt": "2023-04-27T13:30:00.000Z", "image": "https://picsum.photos/1000/500?q=2", "tweetedBy": { "id": Math.random(), "username": "", "name": "", "profilePhoto": "" }, "likeCount": 0, "commentCount": 0, "reTweetsCount": 0, "isLiked": false });


    function handelPost(e) {
        setPost({ "id": Math.random(), "content": e.target.value, "createdAt": "2023-04-27T13:30:00.000Z", "image": "https://picsum.photos/1000/500?q=2", "tweetedBy": { "id": user.id, "username": user.username, "name": user.name, "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg" }, "likeCount": 0, "commentCount": 0, "reTweetsCount": 0, "isLiked": false });
    };
    function postHandler() {
        Dispatch(add_post(post));
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
                        <RiGalleryLine className={p.icon} />
                        <AiOutlineFileGif className={p.icon} />
                        <BiPoll className={p.icon} />
                        <BsEmojiSmile className={p.icon} />
                        <TbCalendarStats className={p.icon} />
                        <ImLocation className={p.icon} />
                    </div>
                    <div className={p.tbtn}> <button onClick={postHandler} >Tweet</button> </div>
                </div>
            </div>
        </div>
    )
}
