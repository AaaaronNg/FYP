import React from "react"
import ExploreItem from "./exploreItem"



const ExploreBar = ({ categories, getCategoryId }) => {


    const generateCategory = () => (
        categories.allCategories ?
            categories.allCategories.map((item, i) => (
                <div
                    class="col-md-2 col-sm-6 px-2"
                    id={i}

                >
                    <ExploreItem key={i} item={item} id={i} getCategoryId={getCategoryId} />
                </div>

            )) : null
    )


    return <>
        <div class="row g-2 pt-1">
            {generateCategory()}
        </div>
    </>
}

export default ExploreBar