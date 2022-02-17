import React from "react"



const AddSHPForm = ({ formik, categories }) => {




    const generateCategory = () => (
        categories ?
            categories.map((item, i) => (
                <option key={item._id} value={item._id}>{item.name}</option>
            )) : null
    )
    return <>

        <div class="row">

            {/* name */}
            <div class="py-2 col-md">
                <div class="form-floating">
                    <input type="text" id="name" name="name" class={(formik.touched["name"] && formik.errors["name"]) ? "form-control is-invalid" : "form-control"} placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
                    <label for="Name">Name</label>
                    {formik.touched["name"] && formik.errors["name"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["name"]}
                        </div>
                    ) : null}
                </div>
            </div>


            <div class="py-2">
                <div class="form-floating">
                    <select class={(formik.touched["category"] && formik.errors["category"]) ? "form-select is-invalid" : "form-select"} id="category" name="category" onChange={formik.handleChange}>
                        <option selected disabled value="">Choose...</option>
                        {
                            generateCategory()
                        }

                    </select>
                    <label for="category">Select a category</label>
                    {formik.touched["category"] && formik.errors["category"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["category"]}
                        </div>
                    ) : null}
                </div>
            </div>


            <div class="py-2">
                <div class="form-floating">
                    <textarea class={(formik.touched["description"] && formik.errors["description"]) ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} placeholder="description" value={formik.values.description} id="description" name="description" style={{ height: "200px" }}></textarea>
                    <label for="description">Description</label>
                    {formik.touched["description"] && formik.errors["description"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["description"]}
                        </div>
                    ) : null}
                </div>
            </div>


            <div class="py-2">
                <div class="form-floating">
                    <input type="number" class={(formik.touched["price"] && formik.errors["price"]) ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} placeholder="price" value={formik.values.price} id="price"></input>
                    <label for="price">$</label>
                    {formik.touched["price"] && formik.errors["price"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["price"]}
                        </div>
                    ) : null}
                </div>
            </div>





        </div>

    </>
}


export default AddSHPForm