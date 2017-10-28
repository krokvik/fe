export const isUserSigned = (state) => state.signin.signed;
export const isStatisticFetching = (state) => state.statistics.fetching;
export const getStatisticError = (state) => state.statistics.error;
export const getSigninError = (state) => state.signin.error;
export const getUserAuthToken = (state) => state.signin.userObject.Zi.access_token;