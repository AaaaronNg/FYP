import {
    GET_ALL_BRANDS
} from "../types"

export default function brandsReducer(state = {}, action) {

    switch (action.type) {

        case GET_ALL_BRANDS:
            return { ...state, allBrands: action.payload }
        default:
            return state
    }
}