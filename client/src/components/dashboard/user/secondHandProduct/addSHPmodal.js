import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import AddSHPForm from "./addSHPForm"
import Loader from "../../../../utils/loader"
import { addSHP } from "../../../../store/action/SHP.actions"
import { useDispatch, useSelector } from "react-redux"




const AddSHPmodal = ({ categories, props }) => {
    const [loading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.notifications)
    const user = useSelector(state => state.users)
    //console.log(user.data)


    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: "",
            category: "",
            images: []
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is require"),
            description: Yup.string()
                .required("Description is required"),
            price: Yup.number().required("Price is required")
                .min(1, "the min price is $1")
                .max(100000, "the max price is $100000"),
            category: Yup.string()
                .required("Category is required")


        }),
        onSubmit: (values) => {
            values = { ...values, "owner": user.data._id }
            handleSubmit(values)
        }
    })

    const handleSubmit = (values) => {
        setLoading(!loading)
        setButtonDisabled(!buttonDisabled)
        dispatch(addSHP(values))
        //console.log(addSHPmodal)
    }

    useEffect(() => {
        if (notifications && notifications.success) {
            console.log("notification success")
            window.location.reload()
            //props.history.push("/dashboard/user_SHP")
        }
        if (notifications && notifications.error) {
            setLoading(!loading)
            setButtonDisabled(!buttonDisabled)
        }

    }, [notifications, loading, buttonDisabled])


    return <>

        <div
            class="modal fade"
            id="addSHP"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
            style={{ height: 700 }}
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add your prodcut</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled={buttonDisabled}></button>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="modal-body" >
                            {
                                loading ? <>
                                    <div style={{ padding: "170px 100px" }}>
                                        <Loader />
                                    </div>


                                </> : <>
                                        <AddSHPForm formik={formik} categories={categories} /></>
                            }

                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" disabled={buttonDisabled}>Add</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    </>
}

export default AddSHPmodal