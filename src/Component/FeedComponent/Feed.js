import { useState } from 'react';
import f from "./Feed.module.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { RxLoop } from 'react-icons/rx'
import { FaRegComment } from 'react-icons/fa'
import { useState } from 'react'


function Feed({ data }) {
    const [likeCount, setLikeCount] = useState(data.likeCount);
    const [liked, setLiked] = useState(false);
    const handleLikeClick = () => {
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setLiked(!liked);
    };
    // const [like, setLike] = useState(false)
    // const [likecount, setLikeCount] = useState(data.likeCount)

    // function handleLike() {

    //     if (like===false) {
    //         setLikeCount(likecount+1)
    //     }
    //     else {
    //         setLikeCount(likecount-1)
    //     }

    // setLike(true)}
    return (
        <div className={f.parent}>
            <div className={f.Header}>
                <div className={f.Dp}>
                    <img src={data.tweetedBy.profilePhoto} className={f.DpImg} />
                </div>
                <div className={f.NameContainer}>
                    <p className={f.name}>{data.tweetedBy.name}</p>
                    <p className={f.content}>{data.content}</p>
                    <div className={f.Body}>
                        <img src={data.image} className={f.bodyImage} />
                        <div className={f.Footer} >
                            <div><AiOutlineHeart /> {data.likeCount}</div>
                            <div><FaRegComment /> {data.commentCount}</div>
                            <div><RxLoop /> {data.reTweetsCount}</div>
                        </div>
                    </div>
                </div >
            </div>
        </div>)
}

export default Feed;
