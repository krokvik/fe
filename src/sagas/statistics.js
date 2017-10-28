import { put, takeLatest } from 'redux-saga/effects'
import {fetchStatistics, USER_LOGGED_IN} from "../actions";

function* requestStatistics() {
    yield put(fetchStatistics())
}

export function* statisticsSaga() {
    yield takeLatest(USER_LOGGED_IN, requestStatistics);
}
