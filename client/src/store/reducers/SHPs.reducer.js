import {
    GET_SHP_PAGINATE,
    CLEAR_SHP_PAGINATE
} from "../types"


export default function SHPsReducer(state = {}, action) {

    switch (action.type) {
        case GET_SHP_PAGINATE:
            return { ...state, bySHPsPaginate: action.payload }
        case CLEAR_SHP_PAGINATE:
            return {}
        default:
            return state
    }
}