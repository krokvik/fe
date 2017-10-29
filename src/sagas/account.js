import { put, takeLatest } from 'redux-saga/effects'
import {USER_LOGGED_IN} from "../actions";
import {fetchAccount} from '../actions/account'

function* requestAccount() {
    yield put(fetchAccount())
}

export function* accountSaga() {
    yield takeLatest(USER_LOGGED_IN, requestAccount);
}
