import React from "react"
import Loadar from "../../../../utils/loader"
import Moment from "react-moment"
import Indicator from "./indicator"



const ProductsTable = ({ products, changeCurrentPage, getId }) => {

    return <>

        {
            products && products.docs ? <>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Created</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.docs.map((item, i) => (
                                <tr key={item._id}>
                                    <td class="align-middle"><Moment to={item.date}></Moment></td>
                                    <td class="align-middle">{item.name}</td>
                                    <td class="align-middle">{item.available}</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getId(item._id)}>Remove</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>


                <Indicator products={products} changeCurrentPage={changeCurrentPage} />


            </> : <Loadar />
        }




    </>
}

export default ProductsTable