import React from "react"



const CartCard = ({ product, index, removeItem }) => {




    return <>

        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        src={product.images[0] ? product.images[0] : "/images/notAvailble/image_not_availble.png"}
                        class="card-img-top"
                        alt="not avaiable"
                        style={{ "height": "280px", "width": "280px" }}

                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <div class="card-text">
                            <div class="container">
                                <p>
                                    <div class="fw-bold fs-3">Price:<span class="fw-normal fs-3"> ${product.price}</span></div>
                                    quantity: {product.quantity}
                                </p>
                            </div>
                        </div>



                        <button type="button" onClick={() => removeItem(product)} class="btn btn-outline-danger">Remove</button>





                    </div>
                </div>
            </div>
        </div>


    </>
}


export default CartCard

