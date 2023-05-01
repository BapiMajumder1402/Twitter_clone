const initialState = {
    user: {},
    tweets: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "add_user":
            return {
                ...state,
                user: { ...state.user, ...action.payload }
            }
        case "add_tweet":
            return {
                ...state,
                tweets: [...state.tweets, ...action.payload]
            }
        case "add_post":
            return {
                ...state,
                tweets: [action.payload, ...state.tweets]
            }
        case "log_out":
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}
export default reducer;
