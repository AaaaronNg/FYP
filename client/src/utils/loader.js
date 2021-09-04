import React from "react"

const Loader = () => (
    <div class="text-center py-4">
        <div class="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
)

export default Loader