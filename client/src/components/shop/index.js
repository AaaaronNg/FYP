import React, { useReducer, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsByPaginate } from "../../store/action/product.actions"
import { getAllBrands } from "../../store/action/brand.actions"
import SideBar from "./sideBar/sidebar"
import ShopContent from "./shopContent"



const defaultValues = { keywords: "", brand: [], min: 0, max: 100000, page: 1 }

const Shop = () => {
    const dispatch = useDispatch()
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        defaultValues
    )
    const { byPaginate } = useSelector(state => state.products)
    const brands = useSelector(state => state.brand)

    const handleKeywords = (values) => {
        setSearchValues({ keywords: values, page: 1 })
    }

    const handleFilters = (filters, category) => {
        setSearchValues({ brand: filters, page: 1 })
    }

    const handlePriceFilters = (values) => {
        setSearchValues({ min: values.min, max: values.max, page: 1 })
    }

    useEffect(() => {
        dispatch(getAllBrands())
    }, [dispatch])

    useEffect(() => {
        dispatch(productsByPaginate(searchValues))
    }, [dispatch, searchValues])



    const changeCurrentPage = (page) => {
        setSearchValues({ page: page })
    }

    return <>

        <nav class="navbar navbar-dark bg-secondary d-block d-md-none">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
                    <SideBar
                        handleKeywords={(values) => handleKeywords(values)}
                        brands={brands.allBrands}
                        handleFilters={(filters) => handleFilters(filters, 'brands')}
                        handlePriceFilters={(values) => handlePriceFilters(values)}
                    />
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    {/* <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <div class="h1">Overview</div>
                        </div> */}
                    <ShopContent products={byPaginate} changeCurrentPage={(page) => changeCurrentPage(page)} />

                </main>
            </div>
        </div>
    </>
}

export default Shop