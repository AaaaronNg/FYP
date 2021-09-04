import React, { useEffect, useState } from "react"
import Toast from "../utils/toast"
import { useSelector, useDispatch } from "react-redux"
import { clearNotification } from "../store/action/index"
import CartModal from "../utils/products/cartModal"



const MainLayout = (props) => {
    const [info, setInfo] = useState({ show: false, msg: "" })
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.notifications)
    useEffect(() => {
        console.log("useEffect")

        if ((notifications && notifications.error) || notifications.success) {
            setInfo(prevState => ({
                ...prevState, show: false
            }))
            const msg = notifications.msg ? notifications.msg : "Error"
            setInfo(prevState => ({
                ...prevState, show: true, msg: msg
            }))
            dispatch(clearNotification())
        }

    }, [notifications, dispatch])


    return <>
        {props.children}
        <Toast show={info.show} msg={info.msg} />
        <CartModal />

    </>
}

export default MainLayout