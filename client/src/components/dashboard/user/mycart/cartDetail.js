import React, { useState } from "react"
import CartCard from "./cartCard"
import { useDispatch } from "react-redux"
import { removeFromCart, userPurchaseSuccess } from "../../../../store/action/user.actions"
import Loader from "../../../../utils/loader"
import { PayPalButton } from "react-paypal-button-v2"

const CartDetail = (props) => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    let cartProducts = props.users.data.cart

    const removeItem = (product) => {
        dispatch(removeFromCart(product))
    }

    const getProductTotal = () => {
        let total = 0
        if (cartProducts) {
            for (let i = 0; i < cartProducts.length; i++) {
                total += cartProducts[i].price * cartProducts[i].quantity
            }
        }
        return total
    }



    const generateItems = () => {
        let items = cartProducts.map((item) => (
            {
                unit_amount: {
                    currency_code: "HKD",
                    value: item.price
                },
                quantity: item.quantity,
                name: item.name
            }
        ))
        return items
    }


    const generateUnits = () => (
        [{
            description: "Guitars and accessories",
            amount: {
                currency_code: "HKD",
                value: getProductTotal(),
                breakdown: {
                    item_total: {
                        currency_code: "HKD",
                        value: getProductTotal()
                    }
                }
            },
            items: generateItems()
        }]
    )



    return <>
        {

            cartProducts ? <>
                <div>
                    <div>
                        {cartProducts.length > 0 &&
                            cartProducts.map((item, index) => {
                                return (<CartCard key={index} product={item} index={index} removeItem={(product) => removeItem(product)} />)

                            })}
                    </div>
                    <div class=" bg-light py-4 text-end">
                        <span class="fw-bold px-3">TOTAL AMOUNT:
                                        <span >$ {getProductTotal(cartProducts)}</span>
                        </span>
                    </div>
                    <div class="p-3 text-center">
                        {
                            loading ? <Loader /> :

                                <PayPalButton
                                    options={{
                                        clientId: "AS4_k6QVY5I-DW8IyHYB__w-e5BdBaz_m0FTSmUzPJJhZ2utTEZskCsm0rZdgBxDfXIV3jQJtCtp6si7",
                                        currency: "HKD",
                                        disableFunding: "credit,card"
                                    }
                                    }
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: generateUnits()
                                        })
                                    }}

                                    onSuccess={(details, data) => {
                                        // console.log(details)
                                        // console.log(data)
                                        dispatch(userPurchaseSuccess(details.id))
                                        setLoading(true)
                                    }}

                                    onCancel={
                                        (data) => {
                                            setLoading(false)
                                        }
                                    }

                                />
                        }
                    </div>
                </div>
            </> : <>there is no  </>
        }






    </>
}

export default CartDetail