import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



const CartModal = () => {

    const user = useSelector(state => state.users)



    return <>
        <div class="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title h3" id="CartModalLabel">Sorry :(</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            !user.auth ? "you need to register or sign in first" :
                                !user.data.verified ? "you need to verify first" : null
                        }

                    </div>
                    <div class="modal-footer">
                        {
                            !user.auth ? <>
                                <Link to="/login">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Register or Sign in</button>
                                </Link>

                            </> :
                                !user.data.verified ? <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Send Email Again</button> : null
                        }

                    </div>
                </div>
            </div>
        </div>

    </>
}

export default CartModal