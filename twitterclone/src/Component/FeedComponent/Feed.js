import f from "./Feed.module.css"
function Feed() {
    return (
        <div className={f.parent} >
            <div className={f.Header} >
                <div className={f.Dp} ><img className={f.DpImg} /></div>
                <div className={f.NameContainer}>
                    <p className={f.name} ></p>
                    <p className={f.content} ></p>
                </div>
            </div >
            <div className={f.Body}>
                <img />
            </div>
            <div className={f.Footer} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>)
}
export default Feed;