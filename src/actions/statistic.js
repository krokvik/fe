import { CALL_API } from 'redux-api-middleware';

const REQUEST = '/statistic/REQUEST';
const RECEIVE = '/statistic/RECEIVE';
const FAILURE = '/statistic/FAILURE';

export function fetchUser(id) {
    return {
        [CALL_API]: {
            endpoint: `http://www.example.com/api/users/${id}`,
            method: 'GET',
            types: [REQUEST, RECEIVE, FAILURE]
        }
    }
}