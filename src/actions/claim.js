import { CALL_API } from 'redux-api-middleware';

export const CLAIM_REQUEST = '/claim/REQUEST';
export const CLAIM_RECEIVE = '/claim/RECEIVE';
export const CLAIM_FAILURE = '/claim/FAILURE';

export function postClaim() {
    return {
        [CALL_API]: {
            endpoint: '/api/claim',
            method: 'POST',
            types: [
                CLAIM_REQUEST,
                CLAIM_RECEIVE,
                CLAIM_FAILURE
            ],
        },
    }
}
