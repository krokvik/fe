import { CALL_API } from 'redux-api-middleware'
import {getUserAuthToken} from "../selectors";

export default function() {
    return function(next) {
        return function(action) {
            const callApi = action[CALL_API]

            if (callApi) {
                callApi.headers = (state) => ({Authorization: 'Bearer ' + getUserAuthToken(state)})
            }

            return next(action)
        }
    }
}
