import React from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"



const Card = ({ product, handleAddToCart, buttonDisabled }) => {




    return <><div class="card shadow-sm h-100 ">
        <img src={product.images[0] ? product.images[0] : "/images/notAvailble/image_not_availble.png"} class="card-img-top" alt="not avaiable" />

        <div class="card-body ">
            <h6 class="card-title">{product.name}</h6>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="text-center fw-bold">${product.price}</div>
            </li>

        </ul>
        <div class="card-footer">
            <div class="d-flex ">
                <div class="p-2 flex-grow-1 w-100">
                    <Link to={`/product_detail/${product._id}`}>
                        <button class="btn btn-secondary flex-grow-1 w-100" type="button">View Product</button>
                    </Link>
                </div>
                <div class="p-2">
                    <button class="btn btn-secondary" type="button" disabled={buttonDisabled} onClick={() => handleAddToCart(product)}>
                        <MdAddShoppingCart />
                    </button>
                </div>


            </div>
        </div>
    </div>
    </>
}

export default Card