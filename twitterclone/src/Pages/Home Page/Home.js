import Left from "/home/akhilesh/Desktop/Twitter_clone/twitterclone/src/Component/Left component/Left.js"
import FeedTop from '../../Component/Feed Top/FeedTop';
import h from "./Home.module.css"
import Feed from "../../Component/FeedComponent/Feed"
function Home() {
    return (<div>
        <Left />
        <div className={h.feedContainer}>
            <FeedTop />
            <Feed />
        </div>

    </div>)
}
export default Home;      