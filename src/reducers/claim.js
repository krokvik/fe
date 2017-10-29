import {CLAIM_FAILURE, CLAIM_RECEIVE, CLAIM_REQUEST} from '../actions/claim'

const initialState = {
    error: null,
    fetching: false,
    good: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLAIM_FAILURE:
            return {
                ...initialState,
                error: "Failed",
            };

        case CLAIM_REQUEST:
            return {
                ...initialState,
                fetching: true,
            };

        case CLAIM_RECEIVE:
            return {
                ...initialState,
                good: true,
            };

        default:
            return state
    }
}
