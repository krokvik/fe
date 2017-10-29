import {statisticsSaga} from './statistics'
import {accountSaga} from './account'
import {all} from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        statisticsSaga(),
        accountSaga(),
    ])
}
