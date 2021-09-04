import React, { useState } from "react"
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { useFormik } from 'formik';
import * as Yup from 'yup';



const CollapsePrice = ({ handlePriceFilters }) => {
    const [togglePrice, setTogglePrice] = useState(false)

    const formik = useFormik({
        initialValues: {
            min: 0,
            max: 2000
        },
        validationSchema: Yup.object({
            min: Yup.number().required("This field is required")
                .min(0, 'The min is 0'),
            max: Yup.number().required("This field is required")
                .max(10000, 'The max is 10000')
        }),
        onSubmit: (values) => {
            handlePriceFilters(values)
        }
    })





    return <>

        <div class="pt-3">
            <div class="d-grid">
                <button onClick={() => { setTogglePrice(!togglePrice) }} class="btn btn-toggle align-items-center rounded btn btn-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrice" aria-expanded="false" aria-controls="collapseExample">
                    {
                        togglePrice ? <BsChevronDown /> : <BsChevronRight />
                    }
                    <span class="align-middle px-2 ">PRICE</span>
                </button>
            </div>


            <div class="collapse" id="collapsePrice">
                <div class="card card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="input-group mb-3">
                            <span class="input-group-text">$ min</span>
                            <input
                                type="number"
                                class={(formik.touched["min"] && formik.errors["min"]) ? "form-control is-invalid" : "form-control"}
                                {...formik.getFieldProps('min')}
                                value={formik.values.min}
                                name="min"
                                id="min"
                            />
                            {formik.touched["min"] && formik.errors["min"] ? (
                                <div class="invalid-feedback">
                                    {formik.errors["min"]}
                                </div>
                            ) : null}
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">$ max</span>
                            <input
                                type="number"
                                class={(formik.touched["max"] && formik.errors["max"]) ? "form-control is-invalid" : "form-control"}
                                {...formik.getFieldProps('max')}
                                value={formik.values.max}
                                name="max"
                                id="max"
                            />
                            {formik.touched["max"] && formik.errors["max"] ? (
                                <div class="invalid-feedback">
                                    {formik.errors["max"]}
                                </div>
                            ) : null}
                        </div>

                        <button type="submit" class="btn btn-secondary btn-sm">Search</button>
                    </form>
                </div>

            </div>
        </div>


    </>
}

export default CollapsePrice