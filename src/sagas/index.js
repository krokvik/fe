import {statisticsSaga} from './statistics'
import {all} from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        statisticsSaga()
    ])
}
