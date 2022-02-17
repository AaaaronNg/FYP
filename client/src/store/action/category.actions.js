import axios from "axios"
import * as actions from "./index"

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const categories = await axios.get("/api/categories/all")
            dispatch(actions.getAllCategories(categories.data))

        } catch (error) {

            dispatch(actions.error(error.response.data.message))
        }
    }
}