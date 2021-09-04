import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"




const DashboardLayout = (props) => {


    const users = useSelector(state => state.users)


    const links = [
        {
            name: "User Information",
            link: "/dashboard/user_info"
        },
        {
            name: "Purchase History",
            link: "/dashboard/purchase_history"
        },
        {
            name: "My Cart",
            link: "/dashboard/user_cart"
        }

    ]

    const adminLinks = [
        {
            name: "Products",
            link: "/dashboard/admin/admin_products"
        },
        {
            name: "Site Setting",
            link: "/dashboard/admin/manage_site"
        }
    ]

    const generateLink = (items) => (
        items.map((item, i) => (
            <li key={i} class="nav-item pb-2">
                <Link class="text-decoration-none text-dark" to={item.link} key={i}>
                    {item.name}

                </Link>
            </li>


        ))
    )

    return <>

        <div class="px-5 ">
            <nav class="navbar navbar-dark bg-secondary d-block d-md-none">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="position-sticky pt-3">

                            <ul class="nav flex-column px-3">
                                <div class="h3">My Account</div>
                                {generateLink(links)}

                            </ul>


                            {
                                users.data.role === "admin" ? <>
                                    <ul class="nav flex-column px-3 pt-4">
                                        <div class="h3">Admin</div>
                                        {generateLink(adminLinks)}

                                    </ul>
                                </> : null
                            }


                        </div>
                    </nav>

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <div class="h1">Overview</div>
                        </div> */}
                        {
                            props.children
                        }

                    </main>
                </div>
            </div>
        </div>

    </>


}

export default DashboardLayout