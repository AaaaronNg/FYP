
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
    GET_CART_PROD_BY_ID,
    GET_CART_PROD,
    PURCHASE_SUCCESS,
    GET_ALL_CATEGORIES,
    GET_SHP_PAGINATE,
    CLEAR_SHP_PAGINATE,
    REMOVE_SHP
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

export const userPurchaseSuccess = (data) => ({
    type: PURCHASE_SUCCESS,
    payload: data
})

// brand

export const getAllBrands = (brands) => ({
    type: GET_ALL_BRANDS,
    payload: brands
})

// category
export const getAllCategories = (categories) => ({
    type: GET_ALL_CATEGORIES,
    payload: categories
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

export const getCartProducts = (products) => ({
    type: GET_CART_PROD,
    payload: products
})

// SHPs
export const SHPsByPaginate = (shps) => ({
    type: GET_SHP_PAGINATE,
    payload: shps
})

export const SHPremove = () => ({
    type: REMOVE_SHP
})



export const clearPaginate = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_SHP_PAGINATE
        })
    }
}


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