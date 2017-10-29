import {STATISTICS_FAILURE, STATISTICS_RECEIVE, STATISTICS_REQUEST} from "../actions";

const initialState = {
    error: null,
    fetching: false,
    response: null,
    available: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STATISTICS_FAILURE:
            return {
                ...initialState,
                error: "Failed to receive your account statistics. Please try again later.",
            };

        case STATISTICS_REQUEST:
            return {
                ...initialState,
                fetching: true,
            };

        case STATISTICS_RECEIVE:
            return {
                ...state,
                response: action.payload,
                error: null,
                fetching: false,
                available: true,
            };

        default:
            return state
    }
}
