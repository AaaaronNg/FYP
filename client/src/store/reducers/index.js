import { combineReducers } from "redux"
import users from "./users.reducer"
import products from "./products.reducer"
import notifications from "./notifications.reducer"
import brand from "./brands.reducer"
import categories from "./categories.reducer"
import SHPs from "./SHPs.reducer"


const appReducers = combineReducers({
    users,
    products,
    notifications,
    brand,
    categories,
    SHPs
})

export default appReducers