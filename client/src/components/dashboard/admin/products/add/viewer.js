import React, { useState } from "react"
import DeleteModal from "./deleteModal"



const Viewer = ({ formik, deleteImg }) => {
    const [idToDelete, setIdToDelete] = useState(null)



    const handleDelete = (index) => {
        setIdToDelete(index)
    }

    const confirmDelete = () => {
        setIdToDelete(null)
        deleteImg(idToDelete)

    }


    return <>
        <div class="container">
            {
                formik.values && formik.values.images ?
                    formik.values.images.map((item, i) => (
                        <>
                            <img
                                src={item}
                                class="img-thumbnail rounded w-25 m-1 h-25 d-inline"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => handleDelete(i)}
                                alt="..."
                                style={{ cursor: "pointer" }}
                            />
                        </>

                    )) : null
            }
        </div>


        <DeleteModal confirmDelete={confirmDelete} />

    </>
}

export default Viewer