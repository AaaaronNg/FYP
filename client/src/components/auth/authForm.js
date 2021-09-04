import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import Loader from "../../utils/loader"
import AuthRoute from "../../hoc/authRoute"

import { useDispatch, useSelector } from "react-redux"

import { userRegister } from "../../store/action/user.actions"

const AuthForm = (props) => {
    const [loading, setLoading] = useState(false)
    const notifications = useSelector(state => state.notifications)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "", password: "", firstname: "", lastname: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("fistname is required"),
            lastname: Yup.string().required("lastname is required"),
            email: Yup.string().required("Email is required").email("This is an invalid email"),
            password: Yup.string().required("Password is required")

        }),
        onSubmit: (values) => {

            setLoading(true)
            handleSubmit(values)

        }
    })
    const handleSubmit = (values) => {
        dispatch(userRegister(values))
    }
    useEffect(() => {
        if (notifications && notifications.success) {
            props.history.push("/dashboard/user_info")
        } else {
            setLoading(false)
        }
    }, [notifications, props.history])

    return <>
        <AuthRoute>
            <section style={{ height: "750px" }}>
                <div class="container h-100">
                    <div class="row justify-content-sm-center h-100">
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div class="text-center my-5">

                            </div>
                            <div class="card shadow-lg">
                                <div class="card-body p-5" card-height={100}>
                                    <h1 class="fs-4 card-title fw-bold mb-4">Register</h1>

                                    {
                                        loading ? <Loader /> : <form class="needs-validation" onSubmit={formik.handleSubmit}>

                                            <div class="mb-3">
                                                <div class="form-floating">
                                                    <input type="text" id="firstname" name="firstname" class={(formik.touched["firstname"] && formik.errors["firstname"]) ? "form-control is-invalid" : "form-control"} placeholder="Alan" onChange={formik.handleChange} value={formik.values.firstname} />
                                                    <label for="floatingInput">First Name</label>
                                                    {formik.touched["firstname"] && formik.errors["firstname"] ? (
                                                        <div class="invalid-feedback">
                                                            firstname is required
                                                        </div>
                                                    ) : null}

                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <div class="form-floating">
                                                    <input type="text" id="lastname" name="lastname" class={(formik.touched["lastname"] && formik.errors["lastname"]) ? "form-control is-invalid" : "form-control"} placeholder="Dunphy" onChange={formik.handleChange} value={formik.values.lastname} />
                                                    <label for="floatingInput">Last Name</label>
                                                    {formik.touched["lastname"] && formik.errors["lastname"] ? (
                                                        <div class="invalid-feedback">
                                                            lastname is required
                                                        </div>
                                                    ) : null}

                                                </div>
                                            </div>


                                            <div class="mb-3">
                                                <div class="form-floating">
                                                    <input type="email" id="email" name="email" class={(formik.touched["email"] && formik.errors["email"]) ? "form-control is-invalid" : "form-control"} placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.email} />
                                                    <label for="floatingInput">Email address</label>
                                                    {formik.touched["email"] && formik.errors["email"] ? (
                                                        <div class="invalid-feedback">
                                                            Email is required
                                                        </div>
                                                    ) : null}

                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <div class="form-floating">
                                                    <input type="password" id="password" name="password" class={(formik.touched["password"] && formik.errors["password"]) ? "form-control is-invalid" : "form-control"} placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                                                    <label for="floatingPassword">Password</label>
                                                    {formik.touched["password"] && formik.errors["password"] ? (
                                                        <div class="invalid-feedback">
                                                            Password is required
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <p class="form-text text-muted mb-3">
                                                By registering you agree with our terms and condition.
                                    </p>

                                            <div class="align-items-center d-flex">
                                                <button type="submit" class="btn btn-primary ms-auto">
                                                    Register
                                        </button>
                                            </div>
                                        </form>
                                    }

                                </div>
                                <div class="card-footer py-3 border-0">
                                    <div class="text-center">
                                        Already have an account? <Link to={"/login"}><a href="index.html" class="text-dark">Login</a></Link >
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </AuthRoute>
    </>
}

export default AuthForm