import React, { useState, useEffect } from "react"
import DashboardLayout from "../../../../../hoc/dashboardLayout"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"
import Loader from "../../../../../utils/loader"
import AddProductForm from "./addProductForm"
import { getAllBrands } from "../../../../../store/action/brand.actions"
import { productAdd } from "../../../../../store/action/product.actions"
import UploadImgForm from "./uploadImgForm"
import Viewer from "./viewer"

const AddProduct = (props) => {
    const [loading, setLoading] = useState(false)
    const notifications = useSelector(state => state.notifications)
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand)

    const formik = useFormik({
        initialValues: {
            productCode: "",
            name: "",
            brand: "",
            description: "",
            price: "",
            available: "",
            woodtype: "",
            shipping: false,
            images: []
        },
        validationSchema: Yup.object({
            productCode: Yup.string()
                .required("Product Code is required"),
            name: Yup.string()
                .required("Name is required"),
            brand: Yup.string()
                .required("Brand is required"),
            woodtype: Yup.string()
                .required("woodtype is required"),
            description: Yup.string()
                .required("Description is required"),
            price: Yup.number().required("Price is required")
                .min(1, "the min price is $1")
                .max(100000, "the max price is 100000"),
            available: Yup.number()
                .required("In Stock?")
                .min(0, "the number should be greater than or equal to 0"),
            shipping: Yup.boolean()
                .required("offering shipping? ")
        }),
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })

    const handleSubmit = (values) => {

        setLoading(true)
        dispatch(productAdd(values))
    }

    const handleImgValues = (img) => {
        const imgArr = formik.values.images
        imgArr.push(img.url)
        formik.setFieldValue("images", imgArr)
    }

    const deleteImg = (index) => {
        const imgArr = formik.values.images
        imgArr.splice(index, 1)
        formik.setFieldValue("images", imgArr)
    }

    useEffect(() => {
        if (notifications && notifications.success) {

            props.history.push("/dashboard/admin/admin_products")
        }

        if (notifications && notifications.error) {
            setLoading(false)
        }


    }, [notifications, props.history])

    useEffect(() => {
        dispatch(getAllBrands())
    }, [dispatch])


    return <>
        <DashboardLayout >
            {
                loading ? <Loader /> : <>
                    <Viewer formik={formik} deleteImg={(index) => deleteImg(index)} />
                    <UploadImgForm imgValues={(img) => handleImgValues(img)} />
                    <AddProductForm formik={formik} brands={brands.allBrands} />
                </>
            }
        </DashboardLayout>
    </>
}


export default AddProduct


