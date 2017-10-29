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
export const getClaimError = (state) => state.claim.error

export const isAccountLoading = (state) => state.account.fetching
export const isAccountAvailable = (state) => state.account.available

export const getAccountUser = (state) => state.account.available && state.account.response.user.name
export const getAccountWallet = (state) => state.account.available && state.account.response.user.wallet
export const getAccountBalance = (state) => state.account.available && state.account.response.balance
export const getAccountError = (state) => state.account.error
