import React from "react"
import Loader from "../../../utils/loader"
import Card from "./Card"

const SHPsContent = ({ SHPsDoc }) => {




    return <>
        {
            SHPsDoc && SHPsDoc.docs ?
                SHPsDoc.totalDocs === 0 ? <div class="h3">There is no result</div> :
                    <>
                        <div class="container pt-5">
                            <div class="row row-cols-sm-2 row-cols-md-4 g-3">
                                {
                                    SHPsDoc.docs.map((item, i) => (
                                        <div class="col">
                                            <Card item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </>
                : <Loader />

        }
    </>
}

export default SHPsContent