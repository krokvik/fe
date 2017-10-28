import {USER_ERROR_LOGIN, USER_LOGGED_IN} from "../actions";

const initialState = {
    signed: false,
    userObject: null,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                signed: true,
                userObject: action.userObject
            };

        case USER_ERROR_LOGIN:
            return {
                signed: false,
                userObject: null,
                error: action.error,
            };

        default:
            return state
    }
}