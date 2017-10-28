import {GOOGLE_SIGN_IN} from "../actions";

const initialState = {
    signed: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN:
            return state

        default:
            return state
    }
}