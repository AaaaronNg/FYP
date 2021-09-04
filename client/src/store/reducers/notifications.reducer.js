import {
    ERROR,
    SUCCESS,
    CLEAR_NOTIFICATION
} from "../types"


export default function notificationsReducer(state = {}, action) {
    switch (action.type) {

        case ERROR:
            return { ...state, error: true, msg: action.payload }
        case SUCCESS:
            return { ...state, success: true, msg: action.payload }
        case CLEAR_NOTIFICATION:
            return {}
        default:
            return state
    }
}