
import {
    GET_PRODUCT_BY_SOLD,
    GET_PRODUCT_BY_DATE,
    SUCCESS,
    ERROR,
    CLEAR_NOTIFICATION,
    AUTH_USER,
    EMPTY_USER,
    UPDATE_USER_PROFILE,
    UPDATE_USER_EMAIL,
    GET_PRODUCT_PAGINATE,
    REMOVE_PRODUCT,
    GET_ALL_BRANDS,
    ADD_PRODUCT,
    GET_PROD_BY_ID,
    CLEAR_CURRENT_PRODUCT,
    USER_ADD_TO_CART,
    GET_CART_PROD_BY_ID
} from "../types"


// user

export const userAuthenticate = (user) => ({
    type: AUTH_USER,
    payload: user
})

export const emptyUser = (msg) => (
    {
        type: EMPTY_USER
    }
)

export const updateUserProfile = (data) => (
    {
        type: UPDATE_USER_PROFILE,
        payload: data
    }
)

export const updateUserEmail = (data) => ({
    type: UPDATE_USER_EMAIL,
    payload: data
}
)

export const userAddToCart = (data) => ({
    type: USER_ADD_TO_CART,
    payload: data
})

// brand

export const getAllBrands = (brands) => ({
    type: GET_ALL_BRANDS,
    payload: brands
})


// product
export const productsBySold = (data) => ({
    type: GET_PRODUCT_BY_SOLD,
    payload: data
})

export const productsByDate = (data) => ({
    type: GET_PRODUCT_BY_DATE,
    payload: data
})

export const productsByPaginate = (products) => ({
    type: GET_PRODUCT_PAGINATE,
    payload: products
})

export const productRemove = () => ({
    type: REMOVE_PRODUCT
})

export const productAdd = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

export const productsById = (product) => ({
    type: GET_PROD_BY_ID,
    payload: product
})

export const clearCurrentProduct = () => ({
    type: CLEAR_CURRENT_PRODUCT
})

export const cartProductsById = (products) => ({
    type: GET_CART_PROD_BY_ID,
    payload: products
})


///

export const error = (msg) => ({
    type: ERROR,
    payload: msg
})

export const success = (msg) => ({
    type: SUCCESS,
    payload: msg
})

export const clearNotification = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_NOTIFICATION
        })
    }
}