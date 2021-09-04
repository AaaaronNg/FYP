
import axios from "axios"
import * as actions from "./index"
import { getAuthHeader, removeTokenCookie, getTokenCookie } from "../../utils/tools"

axios.defaults.headers.post["Content-Type"] = "application/json"

export const productsBySort = ({ limit, sortBy, order, where }) => {
    return async (dispatch) => {
        try {
            const products = await axios.get(`/api/products/all`, {
                params: {
                    limit,
                    sortBy,
                    order
                }

            })
            switch (where) {
                case "byDate":
                    dispatch(actions.productsByDate(products.data))
                    break;
                case "bySold":
                    dispatch(actions.productsBySold(products.data))
                    break;
                default:
                    return false
            }

        } catch (error) {
            dispatch(actions.error("Sorry something happen, try again"))
        }
    }

}

export const productsByPaginate = (args) => {
    return async (dispatch) => {
        try {
            const products = await axios.post("/api/products/paginate/all", args)
            dispatch(actions.productsByPaginate(products.data))

        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}

export const productRemove = (id) => {
    return async (dispatch) => {
        try {

            await axios.delete(`/api/products/product/${id}`, getAuthHeader())

            dispatch(actions.productRemove())
            dispatch(actions.success("product had been removed"))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))

        }
    }
}


export const productAdd = (productData) => {
    return async (dispatch) => {
        try {
            const product = await axios.post("/api/products/", productData, getAuthHeader())
            dispatch(actions.productAdd(product.data))
            dispatch(actions.success("Product had been added"))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}

export const productsById = (id) => {
    return async (dispatch) => {
        try {
            const product = await axios.get(`/api/products/product/${id}`)
            dispatch(actions.productsById(product.data))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }

    }
}

export const cartProductsById = (cartProducts) => {
    return async (dispatch) => {
        try {

            let products = []

            for (let i = 0; i < cartProducts.length; i++) {
                const product = await axios.get(`/api/products/product/${cartProducts[i]._id}`)
                products.push(product.data)
            }

            dispatch(actions.cartProductsById(products))


        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}
