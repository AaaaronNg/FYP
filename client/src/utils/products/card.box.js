import React, { useState } from "react"
import { Link } from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { Modal } from 'bootstrap'
import { userAddToCart } from "../../store/action/user.actions"

const CardBox = ({ items, props }) => {
    const user = useSelector(state => state.users)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        setButtonDisabled(true)
        console.log("start", buttonDisabled)
        let cartModal = new Modal(document.getElementById('CartModal'))

        if (!user.auth) {
            cartModal.show()
            return false
        }
        if (!user.data.verified) {
            cartModal.show()
            return false
        }
        // dispatch(userAddToCart(product))
        setButtonDisabled(false)
        console.log(buttonDisabled)



    }
    const generateCard = () => (
        items ? items.map((item, i) => (
            <div class="col-sx-1" key={i}>
                <div class="card h-100">

                    <div class="card-body text-center ">
                        <img src={item.images[0] ? item.images[0] : "/images/notAvailble/image_not_availble.png"} class="card-img-top" alt="not avaiable" />
                        <h6 class="card-title">{item.name}</h6>

                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="text-center fw-bold">${item.price}</div>
                        </li>

                    </ul>
                    <div class="card-footer">
                        <div class="d-flex ">
                            <div class="p-2 flex-grow-1 w-100">
                                <Link to={`/product_detail/${item._id}`}>
                                    <button class="btn btn-secondary flex-grow-1 w-100" type="button">View Product</button>
                                </Link>

                            </div>
                            <div class="p-2">
                                <button id="addCart" class="btn btn-secondary" type="button" disabled={false} onClick={() => handleAddToCart(item)}>
                                    <MdAddShoppingCart />
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        )) : null
    )

    return <>

        <h5 class="text-center py-4">Best selling items</h5>
        <div class="row row-cols-sm-2  row-cols-md-4 g-4 px-3">
            {generateCard()}
        </div>




    </>
}

export default CardBox