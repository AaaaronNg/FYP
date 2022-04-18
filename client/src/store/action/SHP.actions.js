import axios from "axios"
import * as actions from "./index"
import { getAuthHeader } from "../../utils/tools"



axios.defaults.headers.post["Content-Type"] = "application/json"

export const addSHP = (SHPdata) => {
    return async (dispatch) => {
        try {

            await axios.post("/api/secondHandProducts/", SHPdata, getAuthHeader())
            dispatch(actions.success("Your product had been uploaded"))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}

export const SHPsByPaginate = (args) => {
    return async (dispatch) => {
        try {
            //console.log(args)
            const shps = await axios.post("/api/secondHandProducts/paginate/all", args)
            dispatch(actions.SHPsByPaginate(shps.data))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}

export const SHPremoveById = (id) => {
    return async (dispatch) => {
        try {
            //console.log(id)
            await axios.delete(`/api/secondHandProducts/secondHandProduct/${id}`, getAuthHeader())
            dispatch(actions.SHPremove())
            dispatch(actions.success("Your product had been removed"))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}