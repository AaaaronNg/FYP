import axios from "axios"
import * as actions from "./index"
import { getAuthHeader } from "../../utils/tools"



axios.defaults.headers.post["Content-Type"] = "application/json"

export const addSHP = (SHPdata) => {
    return async (dispatch) => {
        try {
            //SHPdata = { ...SHPdata, }
            await axios.post("/api/secondHandProducts/", SHPdata, getAuthHeader())
            dispatch(actions.success("Your product had been added"))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}

export const SHPsByPaginate = (args) => {
    return async (dispatch) => {
        try {
            const shps = await axios.post("/api/secondHandProducts/paginate/all", args)
            dispatch(actions.SHPsByPaginate(shps.data))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}

export const SHPremove = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/api/products/product/${id}`, getAuthHeader())

        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}