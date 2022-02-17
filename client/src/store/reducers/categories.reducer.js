import {
    GET_ALL_CATEGORIES
} from "../types"

export default function categoriesReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, allCategories: action.payload }
        default:
            return state
    }
}