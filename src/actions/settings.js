import { CALL_API } from 'redux-api-middleware';

export const GET_SETTINGS_REQUEST = '/settings/get/REQUEST';
export const GET_SETTINGS_RECEIVE = '/settings/get/RECEIVE';
export const GET_SETTINGS_FAILURE = '/settings/get/FAILURE';

export const PUT_SETTINGS_REQUEST = '/settings/put/REQUEST';
export const PUT_SETTINGS_RECEIVE = '/settings/put/RECEIVE';
export const PUT_SETTINGS_FAILURE = '/settings/put/FAILURE';

export function getSettings() {
    return {
        [CALL_API]: {
            endpoint: '/api/settings',
            method: 'GET',
            types: [
                GET_SETTINGS_REQUEST,
                GET_SETTINGS_RECEIVE,
                GET_SETTINGS_FAILURE,
            ],
        },
    }
}

export function saveSettings(payload) {
    return {
        [CALL_API]: {
            endpoint: '/api/settings',
            method: 'PUT',
            types: [
                {
                    type: PUT_SETTINGS_REQUEST,
                    payload: () => payload
                },
                PUT_SETTINGS_RECEIVE,
                PUT_SETTINGS_FAILURE,
            ],
        },
    }
}
