import {USER_LOGGED_IN} from "../actions";

const initialState = {
    signed: false,
    userObject: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                signed: true,
                userObject: action.userObject
            };

        default:
            return state
    }
}