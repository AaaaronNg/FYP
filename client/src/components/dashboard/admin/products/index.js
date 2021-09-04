import React, { useEffect, useReducer, useState } from "react"

import DashboardLayout from "../../../../hoc/dashboardLayout"
import { useFormik } from "formik"
import * as Yup from "yup"

import { useDispatch, useSelector } from "react-redux"
import { productsByPaginate, productRemove } from "../../../../store/action/product.actions"

import ProductsTable from "./productsTable"
import { Link } from "react-router-dom"
import Modal from "./modal"

const initValues = { keywords: "", brand: [], min: 0, max: 10000, page: 1 }

const AdminProducts = (props) => {
    const products = useSelector(state => state.products)
    const [id, setId] = useState(null)
    const notifications = useSelector(state => state.notifications)
    const dispatch = useDispatch()

    const getId = (id) => {
        setId(id)
    }
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initValues
    )

    const formik = useFormik({
        initialValues: { keyword: "" },
        validationSchema: Yup.object({
            keywords: Yup.string()
                .min(1, "Must be 1-20 characters and cannot contain special characters")
                .max(20, "Must be 1-20 characters and cannot contain special characters")
        }),
        onSubmit: (values, { resetForm }) => {
            setSearchValues({ keywords: values.keywords, page: 1 })
            resetForm()
        }
    })

    const removeById = () => {
        dispatch(productRemove(id))
    }

    const resetKeywords = () => {
        setSearchValues(initValues)
    }



    useEffect(() => {
        dispatch(productsByPaginate(searchValues))
    }, [dispatch, searchValues])

    useEffect(() => {

        if (notifications && notifications.success) {
            setId(null)
            dispatch(productsByPaginate(searchValues))
        }

    }, [dispatch, notifications, searchValues])

    const changeCurrentPage = (page) => {
        setSearchValues({ page: page })
    }


    return <>

        <DashboardLayout>

            <div class="d-flex bd-highlight mb-3">
                <div class="me-auto p-2 flex-fill bd-highlight">
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            name="keywords"
                            class={(formik.touched["keywords"] && formik.errors["keywords"]) ? "form-control is-invalid" : "form-control"}
                            placeholder="Search..."
                            onChange={formik.handleChange}
                            value={formik.values.keywords}
                        />
                        {formik.touched["keywords"] && formik.errors["keywords"] ? (
                            <div class="invalid-feedback">
                                {formik.errors["keywords"]}
                            </div>
                        ) : null}
                    </form>

                </div>

                <div class="p-2 bd-highlight">
                    <Link to={"/dashboard/admin/add_products"}>
                        <button type="button" class="btn btn-primary flex-fill" >Add Product</button>
                    </Link>

                </div>
            </div>
            <div class="mb-3">
                <ProductsTable
                    products={products.byPaginate}
                    changeCurrentPage={(page) => changeCurrentPage(page)}
                    getId={(id) => getId(id)}
                />
            </div>
            <button type="button" class="btn btn-primary" onClick={() => resetKeywords()}>Reset Form</button>
            <Modal removeById={() => removeById()} />
        </DashboardLayout>

    </>
}

export default AdminProducts
