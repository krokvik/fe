export const USER_LOGGED_IN = 'sign-in/USER_LOGGED_IN'
export const USER_ERROR_LOGIN = 'sign-in/USER_ERROR_LOGIN'

export function signUserIn(userObject) {
    return {
        type: USER_LOGGED_IN,
        userObject
    };
}

export function signUserError(error) {
    return {
        type: USER_ERROR_LOGIN,
        error
    };
}
