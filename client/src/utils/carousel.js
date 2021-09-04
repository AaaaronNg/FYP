import React from "react"





const carousel = ({ carouselPics }) => {



    return <>


        <div id="carouselExampleControls" class="carousel slide px-5 carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner">
                <div class="carousel-item active" key={1}>
                    <img class="d-sm-block d-none w-100" src={carouselPics[0].img} alt="carousel img" />
                </div>
                <div class="carousel-item">
                    <img class="d-sm-block d-none w-100" src={carouselPics[1].img} alt="carousel img" />

                </div>
                <div class="carousel-item">
                    <img class="d-sm-block d-none w-100" src={carouselPics[2].img} alt="carousel img" />
                </div>
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

export default carousel