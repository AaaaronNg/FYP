import React from "react"
import {
    GiDrum,
    GiMusicalScore,
    GiMusicalKeyboard,
    GiViolin,
    GiGuitar,
    GiPianoKeys,
} from "react-icons/gi"



const ExploreItem = ({ item, id, getCategoryId }) => {



    const categoryIcons = [
        <GiDrum size={45} />,
        <GiPianoKeys size={45} />,
        <GiGuitar size={45} />,
        <GiMusicalScore size={45} />,
        <GiViolin size={45} />,
        <GiMusicalKeyboard size={45} />
    ]



    return <>
        <div onClick={() => getCategoryId(item._id)} style={{ cursor: "pointer" }}>
            <div class="d-flex justify-content-center">
                {categoryIcons[id]}
            </div>
            <div class="d-flex justify-content-center py-2" >
                {item.name}
            </div>

        </div>




    </>
}

export default ExploreItem