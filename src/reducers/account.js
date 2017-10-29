import {ACCOUNT_FAILURE, ACCOUNT_RECEIVE, ACCOUNT_REQUEST} from '../actions/account'

const initialState = {
    error: null,
    fetching: false,
    response: null,
    available: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_FAILURE:
            return {
                ...initialState,
                error: "Failed",
            };

        case ACCOUNT_REQUEST:
            return {
                ...initialState,
                fetching: true,
            };

        case ACCOUNT_RECEIVE:
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
