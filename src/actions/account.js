import { CALL_API } from 'redux-api-middleware';

export const ACCOUNT_REQUEST = '/account/REQUEST';
export const ACCOUNT_RECEIVE = '/account/RECEIVE';
export const ACCOUNT_FAILURE = '/account/FAILURE';

export function fetchAccount() {
    return {
        [CALL_API]: {
            endpoint: '/api/user',
            method: 'GET',
            types: [
                ACCOUNT_REQUEST,
                ACCOUNT_RECEIVE,
                ACCOUNT_FAILURE
            ],
        },
    }
}
