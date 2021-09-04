
import axios from "axios"
import * as actions from "./index"
import { getAuthHeader, removeTokenCookie, getTokenCookie } from "../../utils/tools"


export const getAllBrands = () => {
    return async (dispatch) => {
        try {
            const brands = await axios.get("/api/brands/all")
            dispatch(actions.getAllBrands(brands.data))
        } catch (error) {
            dispatch(actions.error(error.response.data.message))
        }
    }
}