import React from "react"
import CarouselProducts from "./carousel"


const PicModal = ({ product }) => {


    return <>

        <div class="modal fade" id="modalPic" tabindex="-1" aria-labelledby="modalPicLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <CarouselProducts product={product} />
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default PicModal