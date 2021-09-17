
import {
    GET_PRODUCT_BY_SOLD,
    GET_PRODUCT_BY_DATE,
    GET_PRODUCT_PAGINATE,
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    GET_PROD_BY_ID,
    CLEAR_CURRENT_PRODUCT,
    GET_CART_PROD_BY_ID,
    GET_CART_PROD
} from "../types"

export default function productsReducer(state = {}, action) {

    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, productAdded: action.payload }
        case GET_PRODUCT_PAGINATE:
            return { ...state, byPaginate: action.payload }
        case REMOVE_PRODUCT:
            return { ...state, removeItem: true }
        case GET_PRODUCT_BY_SOLD:
            return { ...state, bySold: action.payload }
        case GET_PRODUCT_BY_DATE:
            return { ...state, byDate: action.payload }
        case GET_PROD_BY_ID:
            return { ...state, byId: action.payload }
        case GET_CART_PROD_BY_ID:
            return { ...state, cartProducts: action.payload }
        case CLEAR_CURRENT_PRODUCT:
            return { ...state, byId: "" }
        case GET_CART_PROD:
            return { ...state, byCart: action.payload }

        default:
            return state
    }
}