import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories } from "../../store/action/category.actions"
import ExploreBar from "./exploreArea/exploreBar"
import CardBox from "./SHP/cardBox"
import { useFormik } from "formik"
import * as Yup from "yup"
import { SHPsByPaginate } from "../../store/action/SHP.actions"
import Lorder from "../../utils/loader"
import { clearPaginate } from "../../store/action/index"
import axios from "axios";

const initValues = { keywords: "", category: [], page: 1 }

const SHP = (props) => {

    const dispatch = useDispatch()
    const [id, setId] = useState(null)
    const [sellerId, setSellerId] = useState(null)
    const categories = useSelector(state => state.categories)
    const currentUserId = useSelector(state => state.users.data._id)




    const SHPsDoc = useSelector(state => state.SHPs.bySHPsPaginate)
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initValues
    )

    const getCategoryId = (id) => {
        setId(id)
        let categoryArr = []
        categoryArr.push(id)
        setSearchValues({ category: categoryArr })
    }

    const getSellerId = (sellerId) => {
        console.log("sellerId", sellerId)
        console.log(currentUserId)

        const addConversation = async () => {
            if (sellerId !== currentUserId) {
                try {
                    console.log("hello")
                    await axios.post("/api/conversations/", {
                        senderId: sellerId,
                        currentUserId: currentUserId
                    })
                } catch (error) {
                    console.log(error)
                }
            }

        }
        addConversation()

        setTimeout(function () {
            props.history.push("/inbox")
        }, 1000);

    }


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


    useEffect(() => {
        dispatch(clearPaginate())
        dispatch(SHPsByPaginate(searchValues))
    }, [dispatch, searchValues])

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])


    return <>
        <div class="container-fluid">
            <ExploreBar
                categories={categories}
                getCategoryId={(id) => getCategoryId(id)}
            />
            <div class="container pt-5">
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
            {
                SHPsDoc ? <CardBox
                    SHPsDoc={SHPsDoc}
                    getSellerId={getSellerId}
                    currentUserId={currentUserId}
                /> : <Lorder />
            }


        </div>
    </>
}

export default SHP