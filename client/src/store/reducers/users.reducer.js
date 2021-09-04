import {
    AUTH_USER,
    EMPTY_USER,
    UPDATE_USER_PROFILE,
    UPDATE_USER_EMAIL,
    USER_ADD_TO_CART
} from "../types"

let DEFAULT_USER_STATE = {
    data: {
        _id: null,
        email: null,
        firstname: null,
        lastname: null,
        history: [],
        verified: null
    },
    auth: null,
    cart: []
}


export default function usersReducer(state = DEFAULT_USER_STATE, action) {
    switch (action.type) {

        case UPDATE_USER_EMAIL:
            return {
                ...state, data: { ...state.data, email: action.payload }
            }
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                data: {
                    ...action.payload
                }
            }

        case EMPTY_USER:
            return {
                ...state,
                data: { ...DEFAULT_USER_STATE.data }, auth: false
            }

        case AUTH_USER:
            return {
                ...state, data: { ...state.data, ...action.payload.data },
                auth: action.payload.auth
            }
        case USER_ADD_TO_CART:
            return { ...state, data: { ...state.data, cart: action.payload } }

        default:
            return state
    }
}