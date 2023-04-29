export function add_user(loggedinUser) {
    return { type: "add_user", payload: loggedinUser }
};
export function add_tweet(tweets) {
    return { type: "add_tweet", payload: tweets }
};
export function setAuth(status) {
    return { type: "isAuth", payload: status }
};
