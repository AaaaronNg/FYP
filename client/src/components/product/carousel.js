import React from "react"


const CarouselProducts = ({ product }) => {

    const generatePic = () => {
        let item = []
        for (let i = 0; i < product.images.length; i++) {
            item[i] = (
                <div class={(i === 0 ? "carousel-item active" : "carousel-item")} key={i}>
                    <img
                        src={product.images[i] ? product.images[i] : "/images/notAvailble/image_not_availble.png"}
                        class="card-img-top"
                        alt="not avaiable"
                        data-bs-toggle="modal"
                        data-bs-target="#modalPic"
                    />
                </div>
            )
        }
        return item
    }

    return <>
        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {
                    product ? generatePic() : null
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
}

export default CarouselProducts