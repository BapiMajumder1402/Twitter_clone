import Left from "../../Component/Left component/Left"
import FeedTop from '../../Component/Feed Top/FeedTop';
import h from "./Home.module.css"
import Feed from "../../Component/FeedComponent/Feed"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import tweetdata from "../../Data/tweets.json"
import { add_user, add_tweet } from '../../Component/Redux/actions';
import { Route, Routes, useNavigate } from 'react-router-dom'


function Home() {

    const isAuth = useSelector(state => state.isAuthenticated);
    const tweets = useSelector(state => state.tweets);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (isAuth === false) {
        navigate('/')
    }
    useEffect(() => {
        dispatch(add_tweet(tweetdata))
    }, [])
    return (<div className={h.mainContainer}>
        <Left />
        <div className={h.feedContainer}>
            <FeedTop />
            {tweets.map((val, i) => <Feed key={i} data={val} />)}
        </div>
    </div>)
}
export default Home;