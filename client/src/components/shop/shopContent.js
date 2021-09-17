import React, { useEffect, useState } from "react"
import Loader from "../../utils/loader"
import Card from "./card"
import { useSelector, useDispatch } from "react-redux"
import Indicator from "../dashboard/admin/products/indicator"
import { Modal } from "bootstrap"
import { userAddToCart } from "../../store/action/user.actions"

const ShopContent = ({ products, changeCurrentPage }) => {
    const user = useSelector(state => state.users)
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.notifications)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const handleAddToCart = (product) => {

        let cartModal = new Modal(document.getElementById('CartModal'))
        if (!user.auth) {
            cartModal.show()
            return false
        }
        if (!user.data.verified) {
            cartModal.show()
            return false
        }
        setButtonDisabled(!buttonDisabled)
        dispatch(userAddToCart(product))
    }

    useEffect(() => {
        if (notifications && notifications.success) {
            setButtonDisabled(!buttonDisabled)
        }
    }, [notifications, buttonDisabled])

    return <>
        {
            products && products.docs ?

                products.totalDocs === 0 ? <div class="h3">There is no result</div> : <>
                    <div class="album py-5 bg-light">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                            {
                                products.docs.map((item, i) => (
                                    <div class="col">
                                        <Card product={item} handleAddToCart={handleAddToCart} buttonDisabled={buttonDisabled} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <Indicator products={products} changeCurrentPage={changeCurrentPage} />
                </>
                : <Loader />
        }

    </>
}

export default ShopContent