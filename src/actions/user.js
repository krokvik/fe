export const USER_LOGGED_IN = 'sign-in/USER_LOGGED_IN'

export function signUserIn(userObject) {
    return {
        type: USER_LOGGED_IN,
        userObject
    };
}
