import React from "react"
import { useSelector } from "react-redux"
import Loader from "../../utils/loader"
import Card from "./card"
import Indicator from "../dashboard/admin/products/indicator"

const ShopContent = ({ products, changeCurrentPage }) => {

    return <>
        {
            products && products.docs ?

                products.totalDocs === 0 ? <div class="h3">There is no result</div> : <>
                    <div class="album py-5 bg-light">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                            {
                                products.docs.map((item, i) => (
                                    <div class="col"><Card product={item} /></div>
                                ))
                            }
                        </div>
                    </div>


                    <Indicator products={products} changeCurrentPage={changeCurrentPage} />
                </>
                : <Loader />
        }

    </>
}

export default ShopContent