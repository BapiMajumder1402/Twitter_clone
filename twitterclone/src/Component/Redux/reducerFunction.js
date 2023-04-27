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
                tweets: [...state.tweets, action.payload]
            }
        default:
            return state
    }
}
export default reducer;
