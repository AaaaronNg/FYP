import { combineReducers } from "redux"
import users from "./users.reducer"
import products from "./products.reducer"
import notifications from "./notifications.reducer"
import brand from "./brands.reducer"


const appReducers = combineReducers({
    users,
    products,
    notifications,
    brand
})

export default appReducers