import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import appReducers from "./reducers"

const ReduxStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // do the connection with devtools

    const store = createStore(
        // reducers
        appReducers,
        composeEnhancers(applyMiddleware(thunk))
    )


    return store;



}

export default ReduxStore



