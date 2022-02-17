import React from "react"
import Moment from "react-moment"


const Card = ({ item }) => {

    //console.log(item)

    return <>

        <div class="card h-100">
            <img src={item.images[0] ? item.images[0] : "/images/notAvailble/image_not_availble.png"} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted"><Moment to={item.date}></Moment></small>
            </div>
        </div>
    </>
}

export default Card