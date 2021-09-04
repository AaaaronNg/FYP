import React from "react"
import SearchBar from "./seachBar"
import CollapseCheckBos from "./collapseCheckBox"
import CollapsePrice from "./collapsePrice"



const SideBar = ({ handleKeywords, brands, handleFilters, handlePriceFilters }) => {



    return <>


        <div class="position-sticky pt-3">

            <ul class="nav flex-column px-3">
                <div class="h3">My Account</div>
                <li class="nav-item pb-2">
                    <div class="text-decoration-none text-dark" >
                        <SearchBar handleKeywords={handleKeywords} />
                        <CollapseCheckBos brands={brands} handleFilters={handleFilters} />
                        <CollapsePrice handlePriceFilters={handlePriceFilters} />

                    </div>
                </li>
            </ul>

        </div>
    </>
}

export default SideBar