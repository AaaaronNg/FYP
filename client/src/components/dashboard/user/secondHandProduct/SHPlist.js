import React from "react"

import Moment from "react-moment"

const SHPlist = ({ SHPsDoc, getSHPid }) => {

    return <>



        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Created</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {
                    SHPsDoc.docs.map((item, i) => (
                        <tr key={item._id}>
                            <td class="align-middle"><Moment to={item.date}></Moment></td>
                            <td class="align-middle">{item.name}</td>
                            <td class="align-middle">${item.price}</td>
                            <td>
                                <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#SHPModal" onClick={() => getSHPid(item._id)}>Remove</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>



    </>
}

export default SHPlist