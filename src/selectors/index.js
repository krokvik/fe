export const isUserSigned = (state) => state.signin.signed;
export const isStatisticFetching = (state) => state.statistics.fetching;
export const getStatisticError = (state) => state.statistics.error;
export const getSigninError = (state) => state.signin.error;
export const getUserAuthToken = (state) => state.signin.userObject.Zi.access_token;

export const getYesterdaySteps = (state) => state.statistics.available && state.statistics.response.yesterday.steps
export const getYesterdayCoins = (state) => state.statistics.available && state.statistics.response.yesterday.reward
export const getTodaySteps = (state) => state.statistics.available && state.statistics.response.today.steps
export const getTodayCoins = (state) => state.statistics.available && state.statistics.response.today.reward

export const isStatisticsAvailable = (state) => state.statistics.available

export const isClaimLoading = (state) => state.claim.fetching
export const isClaimDone = (state) => state.claim.good
