import React from "react"
import DashboardLayout from "../../../../hoc/dashboardLayout"


import CartDetail from "../mycart/cartDetail"



const MyCart = (props) => {

    return <>

        <DashboardLayout>
            {
                props.users.data.cart && props.users.data.cart.length > 0 ?
                    <>
                        <div class="h1 fw-bold">My Cart</div>

                        <CartDetail {...props} />
                    </>
                    : <div>there is nothing in your cart :(</div>
            }

        </DashboardLayout>

    </>
}

export default MyCart