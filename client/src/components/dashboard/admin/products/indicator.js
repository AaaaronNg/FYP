import React from "react"


const Indicator = ({ products, changeCurrentPage }) => {


    const changePage = (page) => {
        changeCurrentPage(page)
    }
    const generatePage = () => {
        let item = []
        for (let i = 1; i <= products.totalPages; i++) {
            item[i] = (<li class={products.page === i ? "page-item active" : "page-item"}><a class="page-link" onClick={() => changePage(i)}>{i}</a></li>)
        }
        return item
    }
    return <>

        <nav >
            <ul class="pagination">

                <li class={products.hasPrevPage ? "page-item" : "page-item disabled"}>
                    <a class="page-link" href="#" tabindex="-1" onClick={() => changePage(products.prevPage)}>Previous</a>
                </li>
                {
                    generatePage()
                }
                <li class={products.hasNextPage ? "page-item" : "page-item disabled"}>
                    <a class="page-link" onClick={() => changePage(products.nextPage)}>Next</a>
                </li>
            </ul>
        </nav>

    </>
}


export default Indicator