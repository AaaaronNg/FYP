import React, { useState, useEffect } from "react"
import DashboardLayout from "../../hoc/dashboardLayout"

import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { userUpdateProfile } from "../../store/action/user.actions"
import Loader from "../../utils/loader"


const UserInfo = ({ users }) => {
    const [loading, setLoading] = useState(false)
    const notifications = useSelector(state => state.notifications)

    const dispatch = useDispatch()


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: users.data.firstname,
            lastname: users.data.lastname,
            email: users.data.email
        },
        validationSchema: Yup.object({
            firstname: Yup.string().max(25, "30 char max").required("firstname is required"),
            lastname: Yup.string().max(25, "30 char max").required("firstname is required"),
            email: Yup.string().required("Email is required").email("This is an invalid email")
        }),
        onSubmit: (values) => {
            setLoading(true)
            dispatch(userUpdateProfile(values))
        }

    })

    useEffect(() => {
        if (notifications && notifications.success) {
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [notifications])


    return <>
        <DashboardLayout>
            <div class="h1 fw-bold">User Information</div>

            <div class=" w-100">
                {
                    loading ? <Loader /> : <form onSubmit={formik.handleSubmit}>
                        <div class="row py-3">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" id="firstname" placeholder={users.data.firstname} class={(formik.touched["firstname"] && formik.errors["firstname"]) ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} value={formik.values.firstname} />
                                    <label for="firstname">Firstname</label>
                                    {formik.touched["firstname"] && formik.errors["firstname"] ? (
                                        <div class="invalid-feedback">
                                            {formik.errors["firstname"]}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-floating ">
                                    <input type="text" id="lastname" class={(formik.touched["lastname"] && formik.errors["lastname"]) ? "form-control is-invalid" : "form-control"} placeholder="lastname" onChange={formik.handleChange} value={formik.values.lastname} />
                                    <label for="lastname">Lastname</label>
                                    {formik.touched["lastname"] && formik.errors["lastname"] ? (
                                        <div class="invalid-feedback">
                                            {formik.errors["lastname"]}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div class="row pb-3">
                            <div class="col">
                                <div class="form-floating ">
                                    <input type="email" id="Email" name="email" class={(formik.touched["email"] && formik.errors["email"]) ? "form-control is-invalid" : "form-control"} placeholder="email" onChange={formik.handleChange} value={formik.values.email} />
                                    <label for="Email">Email</label>
                                    {formik.touched["email"] && formik.errors["email"] ? (
                                        <div class="invalid-feedback">
                                            {formik.errors["email"]}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>



                        <button class="btn btn-primary btn-sm" type="submit">Update Profile</button>
                    </form>

                }

            </div>

        </DashboardLayout>
    </>

}

export default UserInfo