import React, { useEffect } from "react"
import Feature from "./feature"
import { useDispatch, useSelector } from "react-redux"
import { productsBySort, } from "../../store/action/product.actions"
import CardBox from "../../utils/products/card.box"
import Lorder from "../../utils/loader"


const Home = (props) => {
    const { bySold, byDate } = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(productsBySort({ limit: 4, sortBy: "itemSold", order: "asc", where: "bySold" }))
        dispatch(productsBySort({ limit: 2, sortBy: "date", order: "desc", where: "byDate" }))
    }, [dispatch])


    return (
        <>
            <Feature />
            {
                bySold ? <CardBox items={bySold} props={props} /> : <Lorder class="pt-4" />
            }

            <div class="container py-5">
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/Anop2dCuR2g" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>



        </>
    )
}

export default Home;