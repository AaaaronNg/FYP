import React, { useState, useEffect } from "react"
import DashboardLayout from "../../../../hoc/dashboardLayout"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import Modal from "./modal"
import Loader from "../../../../utils/loader"
import SHPlist from "./SHPlist"
import { SHPsByPaginate, SHPremoveById } from "../../../../store/action/SHP.actions"
import { getAllCategories } from "../../../../store/action/category.actions"

import AddSHPmodal from "./addSHPmodal"
import { clearPaginate } from "../../../../store/action/index"


const AddSecondHandProduct = (props) => {
    const [SHPid, setSHPid] = useState(null)
    const dispatch = useDispatch()
    const SHPsDoc = useSelector(state => state.SHPs.bySHPsPaginate)
    const user_id = useSelector(state => state.users.data._id)
    const categories = useSelector(state => state.categories)


    const getSHPid = (id) => {
        setSHPid(id)
    }

    const removeSHPbyId = () => {
        dispatch(SHPremoveById(SHPid))
    }

    // useEffect(() => {
    //     dispatch(clearPaginate())
    // })

    useEffect(() => {
        dispatch(clearPaginate())
        let userIDArr = []
        userIDArr.push(user_id)
        dispatch(SHPsByPaginate({ userID: userIDArr, page: 1 }))
    }, [dispatch, user_id])

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return <>
        <DashboardLayout>

            {
                categories ? <><button
                    type="button"
                    class="btn btn-primary flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#addSHP"
                >Add</button>

                    {
                        SHPsDoc ? <SHPlist SHPsDoc={SHPsDoc} getSHPid={(id) => getSHPid(id)} /> : <>
                            <Loader />
                        </>
                    }
                    <AddSHPmodal categories={categories.allCategories} props={props} />
                </>
                    : <Loader />
            }

            <Modal removeSHPbyId={() => removeSHPbyId()} />


        </DashboardLayout>
    </>
}

export default AddSecondHandProduct