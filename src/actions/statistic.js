import { CALL_API } from 'redux-api-middleware';

export const STATISTICS_REQUEST = '/statistics/REQUEST';
export const STATISTICS_RECEIVE = '/statistics/RECEIVE';
export const STATISTICS_FAILURE = '/statistics/FAILURE';

export function fetchStatistics() {
    return {
        [CALL_API]: {
            endpoint: '/api',
            method: 'GET',
            types: [
                STATISTICS_REQUEST,
                STATISTICS_RECEIVE,
                STATISTICS_FAILURE
            ],
        },
    }
}
