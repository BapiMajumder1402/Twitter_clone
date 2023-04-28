import Left from "../../Component/Left component/Left"
import FeedTop from '../../Component/Feed Top/FeedTop';
import h from "./Home.module.css"
import Feed from "../../Component/FeedComponent/Feed"
function Home() {
    return (<div className={h.mainContainer}>
        <Left />
        <div className={h.feedContainer}>
            <FeedTop />
            <Feed />
        </div>

    </div>)
}
export default Home;      