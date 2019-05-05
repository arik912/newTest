
const defaultState = {};

export default function (state = defaultState, { type, payload }) {
    switch (type) {
        case '@@redux/INIT':
            return state;
        case 'GET_POSTS':
        return {
            ...state,
            posts: payload
        }
        case 'CURRENT_POSTS':
        return {
            ...state,
            currentPosts: payload
        }
        default:
            return state;
    }
}
