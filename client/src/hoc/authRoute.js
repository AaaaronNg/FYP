import React from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"


const AuthRoute = (props) => {
    const users = useSelector(state => state.users)
    return <>
        {
            users.auth ? <Redirect to="/dashboard/user_info" />
                : props.children
        }
    </>



}

export default AuthRoute