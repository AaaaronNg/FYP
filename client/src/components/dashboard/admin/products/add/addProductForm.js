import React from "react"



const AddProductForm = ({ formik, brands }) => {

    const generateBrand = () => (
        brands ?
            brands.map((item, i) => (
                <option key={item._id} value={item._id}>{item.name}</option>
            )) : null
    )

    return <>

        <form onSubmit={formik.handleSubmit}>
            <div class="row">
                <div class="py-2 col-md">
                    <div class="form-floating">
                        <input type="text" id="productCode" name="productCode" class={(formik.touched["productCode"] && formik.errors["productCode"]) ? "form-control is-invalid" : "form-control"} placeholder="Product Code" onChange={formik.handleChange} value={formik.values.productCode} />
                        <label for="productCode">Product Code</label>
                        {formik.touched["productCode"] && formik.errors["productCode"] ? (
                            <div class="invalid-feedback">
                                {formik.errors["productCode"]}
                            </div>
                        ) : null}
                    </div>
                </div>

                <div class="py-2 col-md">
                    <div class="form-floating">
                        <input type="text" id="name" name="name" class={(formik.touched["name"] && formik.errors["name"]) ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} placeholder="Name" value={formik.values.name} />
                        <label for="name">Product Name</label>
                        {formik.touched["productCode"] && formik.errors["name"] ? (
                            <div class="invalid-feedback">
                                {formik.errors["name"]}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>


            <div class="py-2">
                <div class="form-floating">
                    <select class={(formik.touched["brand"] && formik.errors["brand"]) ? "form-select is-invalid" : "form-select"} id="brand" name="brand" onChange={formik.handleChange}>
                        <option selected disabled value="">Choose...</option>
                        {
                            generateBrand()
                        }

                    </select>
                    <label for="brand">Select a Brand</label>
                    {formik.touched["brand"] && formik.errors["brand"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["brand"]}
                        </div>
                    ) : null}
                </div>
            </div>

            <div class="py-2 ">
                <div class="form-floating">
                    <input type="text" id="woodtype" name="woodtype" class={(formik.touched["woodtype"] && formik.errors["woodtype"]) ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} placeholder="Enter the Woodtype" value={formik.values.woodtype} />
                    <label for="name">Enter the Woodtype</label>
                    {formik.touched["productCode"] && formik.errors["woodtype"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["woodtype"]}
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


            <div class="py-2">
                <div class="form-floating">
                    <input type="number" class={(formik.touched["available"] && formik.errors["available"]) ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} placeholder="available" value={formik.values.available} id="available"></input>
                    <label for="available">Available</label>
                    {formik.touched["available"] && formik.errors["available"] ? (
                        <div class="invalid-feedback">
                            {formik.errors["available"]}

                        </div>
                    ) : null}
                </div>
            </div>




            <div class="py-2">
                <div class="form-floating">
                    <select class="form-select" id="shipping" name="shipping" onChange={formik.handleChange}>
                        <option key="1" value={true}>Yes</option>
                        <option key="2" selected value={false}>No</option>
                    </select>
                    <label for="shipping">shipping?</label>

                </div>
            </div>

            <div class="py-2">
                <button type="submit" class="btn btn-primary">Confirm</button>
            </div>


        </form>




    </>

}

export default AddProductForm