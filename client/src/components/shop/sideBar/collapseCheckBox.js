import React, { useState, useEffect } from "react"
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const CollapseCheckBox = ({ brands, handleFilters }) => {
    const [toggle, setToggle] = useState(false)
    const [checked, setChecked] = useState([])


    const handleCheckBox = (id) => {
        const currentIndex = checked.indexOf(id)
        const newChecked = [...checked]


        if (currentIndex === -1) {
            newChecked.push(id)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        handleFilters(newChecked)

    }



    return <>
        <div class="pt-3">
            <div class="d-grid">
                <button onClick={() => { setToggle(!toggle) }} class="btn btn-toggle align-items-center rounded btn btn-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseBrands" aria-expanded="false" aria-controls="collapseExample">
                    {
                        toggle ? <BsChevronDown /> : <BsChevronRight />
                    }
                    <span class="align-middle px-2 ">BRANDS</span>
                </button>
            </div>


            <div class="collapse" id="collapseBrands">
                <div class="card card-body">
                    {
                        brands ?
                            brands.map((item, i) => (
                                <div class="form-check" key={i}>
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        name={item.name}
                                        id={item._id}
                                        onChange={() => handleCheckBox(item._id)}
                                        checked={checked.indexOf(item._id) !== -1 ? true : false} />

                                    <label class="form-check-label" for={item._id}>
                                        {item.name}
                                    </label>
                                </div>))
                            : null
                    }
                </div>

            </div>
        </div>


    </>
}

export default CollapseCheckBox