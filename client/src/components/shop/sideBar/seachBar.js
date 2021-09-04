import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"


const SearchBar = ({ handleKeywords }) => {

    const formik = useFormik({
        initialValues: { keywords: "" },
        validationSchema: Yup.object({
            keywords: Yup.string().min(3, "search should be more than 3").max(200, "search should be less than 200")
        }),
        onSubmit: (values, { resetForm }) => {
            handleKeywords(values.keywords)
            resetForm()
        }
    })


    return <>
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="keywords"
                class={(formik.touched["keywords"] && formik.errors["keywords"]) ? "form-control is-invalid" : "form-control"}
                placeholder="Search..."
                onChange={formik.handleChange}
                value={formik.values.keywords}
            />
        </form>
    </>
}

export default SearchBar