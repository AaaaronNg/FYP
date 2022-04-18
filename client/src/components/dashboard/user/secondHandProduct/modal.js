import React from "react"


const Modal = ({ removeSHPbyId }) => {



    return <>
        <div class="modal fade" id="SHPModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Warning</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure remove the product?
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-danger" onClick={() => removeSHPbyId()}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Modal