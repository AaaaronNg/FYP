import React, { useEffect } from "react"
import CartCard from "./cartCard"
import { useDispatch, useSelector } from "react-redux"
import { cartProductsById } from "../../../../store/action/product.actions"

const CartDetail = ({ cartProducts }) => {

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(cartProductsById(cartProducts))

    }, [dispatch, cartProducts,])






    return <>
        <CartCard />
    </>
}

export default CartDetail