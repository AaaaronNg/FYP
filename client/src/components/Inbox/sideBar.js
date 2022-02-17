import React from "react"

const SideBar = ({ props }) => {

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
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-block bg-light sidebar collapse">
                        <div class="position-sticky pt-3">

                            <ul class="nav flex-column px-3">
                                <div class="h3">My Account</div>


                            </ul>


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

export default SideBar