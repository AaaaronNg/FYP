import React, { useEffect } from "react"
import Loader from "../../utils/loader"
import { productsById } from "../../store/action/product.actions"
import { useSelector, useDispatch } from "react-redux"
import { clearCurrentProduct } from "../../store/action/index"
import { MdAddShoppingCart, MdLocalShipping } from "react-icons/md"
import { RiRefund2Fill } from "react-icons/ri"
import { Modal } from "bootstrap"
import PicModal from "./picModal"
import { userAddToCart } from "../../store/action/user.actions"
import Moment from "react-moment"


const ProductDetail = (props) => {

    const product = useSelector(state => state.products.byId)
    const user = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsById(props.match.params.id))
    }, [dispatch, props.match.params.id])

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
        dispatch(userAddToCart(product))
    }

    useEffect(() => {
        dispatch(clearCurrentProduct())
    }, [dispatch])


    return <>

        {
            product ? <div class="container py-4">
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="card-header">
                            <small class="text-muted">Last updated <Moment to={product.date}></Moment></small>
                        </div>
                        <div class="col-md-4">

                            <img
                                src={product.images[0] ? product.images[0] : "/images/notAvailble/image_not_availble.png"}
                                class="card-img-top"
                                alt="not avaiable"
                                data-bs-toggle="modal"
                                data-bs-target="#modalPic"
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <div class="col-md-8">

                            <div class="card-body">
                                <h5 class="card-title h3">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <div class="card-text"><small class="text-muted">BRAND: {product.brand.name}</small></div>
                                <div class="card-text"><small class="text-muted">PRODUCT CODE: {product.productCode}</small></div>
                                <hr class="my-4" />
                                <div class="card-text h3">HK$ {product.price}</div>
                                <hr class="my-4" />
                                <div class="d-flex justify-content-start">
                                    <div class="pe-3">
                                        <button
                                            class="btn btn-warning"
                                            type="button"
                                            onClick={() => handleAddToCart(product)}
                                        ><span class="align-middle">Add to Cart  <MdAddShoppingCart /></span> </button>
                                    </div>

                                    {
                                        product.shipping ? <div class="px-4 text-muted">
                                            <MdLocalShipping size={45} />
                                            <span class="px-2 fw-bold">
                                                FREE SHIPPING
                                        </span>
                                        </div> : null
                                    }

                                    <div class="pe-4 text-muted">
                                        <RiRefund2Fill size={45} />
                                        <span class="px-2 fw-bold">
                                            REFUND AVAILABLE
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                : <Loader />
        }
        <PicModal product={product} />


    </>
}

export default ProductDetail

