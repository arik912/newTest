
const defaultState = {
    loading:false
};

export default function (state = defaultState, { type, payload }) {
    switch (type) {
        case '@@redux/INIT':
            return state;
        case 'GET_COMMENTS':
        return {
            ...state,
            comments: payload
        }
        default:
            return state;
    }
}
