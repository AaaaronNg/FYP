
import React from "react"
import { Link } from "react-router-dom"




const header = ({ users, logoutUser }) => {


    return (
        <>

            <header class="px-5 pt-3">
                <div class="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom py-3">
                    <a href="/" class="d-flex align-items-center text-dark text-decoration-none ">

                        <span class="fs-4 fw-bold">Pricing example</span>
                    </a>

                    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        {
                            users.auth ?
                                <>


                                    <Link class="me-3 pt-2 text-dark text-decoration-none" to="/dashboard">My account</Link>
                                    <Link class="me-3 pt-2 text-dark text-decoration-none" to="/dashboard/user_cart">My Cart</Link>
                                    <button type="button" onClick={() => logoutUser()} class="btn btn-outline-dark fw-bold me-3 ">Log out</button>
                                </>
                                :
                                <>
                                    <Link class="me-3 pt-2 text-dark text-decoration-none" to="/shop">Shop</Link>
                                    <Link to="/login">
                                        <div class="me-3 text-dark text-decoration-none" >
                                            <button type="button" class="btn btn-outline-dark fw-bold">Log in</button>
                                        </div>

                                    </Link>
                                </>
                        }




                    </nav>
                </div>


            </header>





        </>
    )

}

export default header