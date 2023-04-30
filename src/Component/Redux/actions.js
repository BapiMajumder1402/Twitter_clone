export function add_user(loggedinUser) {
    return { type: "add_user", payload: loggedinUser }
};
export function add_tweet(tweets) {
    return { type: "add_tweet", payload: tweets }
};
export function add_post(tweet) {
    return { type: "add_post", payload: tweet }
};
export function logoutUser() {
    return { type: "log_out", payload: null }
};
