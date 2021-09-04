import React, { useState } from "react"
import * as Yup from "yup"
import axios from "axios"
import { useFormik } from "formik"
import Loader from "../../../../../utils/loader"
import { getTokenCookie } from "../../../../../utils/tools"


const UploadImgForm = ({ imgValues }) => {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: { pic: "" },
        validationSchema: Yup.object({
            img: Yup.mixed().required("Img is required")
        }),
        onSubmit: (values) => {
            setLoading(true)
            handleSubmit(values)
        }
    })

    const handleSubmit = (values) => {
        uploadImgAPI(values)

    }

    const uploadImgAPI = (values) => {
        let formData = new FormData()
        formData.append("file", values.img)

        axios.post("/api/products/upload", formData, {
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": `Bearer ${getTokenCookie()}`
            }
        }).then(res => {
            imgValues(res.data)
        }).catch(error => {
            alert(error)
        }).finally(() => {
            setLoading(false)
        })
    }




    return <>
        {
            loading ? <Loader /> :
                <form onSubmit={formik.handleSubmit}>
                    <div class="mb-3">
                        <input class={(formik.touched["img"] && formik.errors["img"]) ? "form-control is-invalid" : "form-control"} name="img" type="file" id="img" multiple
                            onChange={(e) => {
                                formik.setFieldValue("img", e.target.files[0])
                            }}
                        />
                    </div>
                    <div class="py-2">
                        <button type="submit" class="btn btn-primary">Upload</button>
                    </div>
                </form>
        }


    </>
}

export default UploadImgForm