import { CALL_API } from 'redux-api-middleware';

export const PUT_SETTINGS_REQUEST = '/settings/put/REQUEST';
export const PUT_SETTINGS_RECEIVE = '/settings/put/RECEIVE';
export const PUT_SETTINGS_FAILURE = '/settings/put/FAILURE';

export function saveSettings(payload) {
    return {
        [CALL_API]: {
            endpoint: '/api/set-wallet',
            method: 'PUT',
            body: JSON.stringify(payload),
            types: [
                PUT_SETTINGS_REQUEST,
                PUT_SETTINGS_RECEIVE,
                PUT_SETTINGS_FAILURE,
            ],
        },
    }
}
