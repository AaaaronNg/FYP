import React from "react"
import Carousel from "../../utils/carousel"



const carouselPics = [
    {
        img: "/images/featured/feature_home1.jpeg",
        linkTitle: "shop now",
        link: "/shop"
    },
    {
        img: "/images/featured/feature_home2.jpeg",
        linkTitle: "shop now",
        link: "/shop"
    },
    {
        img: "/images/featured/feature_home3.jpeg",
        linkTitle: "shop now",
        link: "/shop"
    },

]

const feature = () => {

    return <>
        <Carousel carouselPics={carouselPics} />
    </>

}

export default feature