import { CALL_API } from 'redux-api-middleware';

export const STATISTICS_REQUEST = '/statistics/REQUEST';
export const STATISTICS_RECEIVE = '/statistics/RECEIVE';
export const STATISTICS_FAILURE = '/statistics/FAILURE';

export const USER_REQUEST = '/user/REQUEST';
export const USER_RECEIVE = '/user/RECEIVE';
export const USER_FAILURE = '/user/FAILURE';


export function fetchStatistics() {
    return {
        [CALL_API]: {
            endpoint: '/api/get-stats',
            method: 'GET',
            types: [
                STATISTICS_REQUEST,
                STATISTICS_RECEIVE,
                STATISTICS_FAILURE
            ],
        },
    }
}

export function getUser() {
    return {
        [CALL_API]: {
            endpoint: '/api/user',
            method: 'GET',
            types: [
                USER_REQUEST,
                USER_RECEIVE,
                USER_FAILURE
            ],
        },
    }
}
