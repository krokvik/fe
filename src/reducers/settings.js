import {
    PUT_SETTINGS_FAILURE, PUT_SETTINGS_RECEIVE, PUT_SETTINGS_REQUEST
} from "../actions";

const initialState = {
    get: {
        error: null,
        fetching: false,
        response: null,
    },
    put: {
        error: null,
        fetching: false,
        response: null,
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PUT_SETTINGS_FAILURE:
            return {
                ...state,
                put: {
                    ...initialState.put,
                    error: "Failed",
                },
            };

        case PUT_SETTINGS_REQUEST:
            return {
                ...state,
                put: {
                    ...initialState.put,
                    fetching: true,
                },
            };

        case PUT_SETTINGS_RECEIVE:
            return {
                ...state,
                put: {
                    response: action.payload,
                    error: null,
                    fetching: false,
                },
            };

        default:
            return state
    }
}
