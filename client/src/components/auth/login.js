import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import Loader from "../../utils/loader"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userLogin } from "../../store/action/user.actions"
import AuthRoute from "../../hoc/authRoute"

const Login = (props) => {

    const [loading, setLoading] = useState(false)
    const notifications = useSelector(state => state.notifications)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "", password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required").email("This is an invalid email"),
            password: Yup.string().required("Password is required")

        }),
        onSubmit: (values) => {
            setLoading(true)
            handleSubmit(values)
        }
    })
    const handleSubmit = (values) => {
        // console.log("hello")
        dispatch(userLogin(values))
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
            <section style={{ height: "590px" }}>
                <div class="container h-100">
                    <div class="row justify-content-sm-center h-100">
                        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div class="text-center my-5">

                            </div>
                            <div class="card shadow-lg">
                                <div class="card-body p-5" card-height={100}>
                                    <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>

                                    {
                                        loading ? <Loader /> : <form class="needs-validation" onSubmit={formik.handleSubmit}>
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



                                            <div class="align-items-center d-flex">
                                                <button type="submit" class="btn btn-primary ms-auto">
                                                    Log in
                                        </button>
                                            </div>
                                        </form>
                                    }

                                </div>
                                <div class="card-footer py-3 border-0">
                                    <div class="text-center">
                                        do not have an account? <Link to={"/register"}><a href="index.html" class="text-dark">register</a></Link>
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


export default Login