import f from "./Feed.module.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { RxLoop } from 'react-icons/rx'
import { FaRegComment } from 'react-icons/fa'

function Feed() {
    return (
        <div className={f.parent} >
            <div className={f.Header} >
                <div className={f.Dp} >
                    <img src={"https://randomuser.me/api/portraits/women/30.jpg"} className={f.DpImg} />
                </div>
                <div className={f.NameContainer}>
                    <p className={f.name} >John Doe</p>
                    <p className={f.content} >Just had the best pizza ever! 🍕🤤 #foodie #yum</p>
                </div>
            </div >
            <div className={f.Body}>
                <img src={"https://picsum.photos/1000/500?q=2"} className={f.bodyImage} />
            </div>
            <div className={f.Footer} >
                <div><AiOutlineHeart /> 12</div>
                <div><FaRegComment /> 3</div>
                <div><RxLoop /> 2</div>
            </div>
        </div>)
}
export default Feed;