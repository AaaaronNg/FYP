import React from "react"
import Moment from "react-moment"
import { BsChat } from "react-icons/bs"
import { Link } from "react-router-dom"

const Card = ({ item, getSellerId, currentUserId }) => {
    return <>

        <div class="card h-100">

            <img src={item.images[0] ? item.images[0] : "/images/notAvailble/image_not_availble.png"} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.owner}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex bd-highlight">
                    <div class="p-2 w-100 "><Moment to={item.date}></Moment></div>
                    {
                        currentUserId !== item.owner ? <Link onClick={() => getSellerId(item.owner)} class="p-2 flex-shrink-1 bd-highlight"><BsChat size={20} /></Link> : null
                    }

                </div>
            </div>
        </div>
    </>
}

export default Card