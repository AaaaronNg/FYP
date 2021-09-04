import React from "react"
import { Toast } from 'bootstrap'


const toast = ({ show, msg }) => {

    if (show) {
        let toastLiveExample = document.getElementById('liveToast')
        let toast = new Toast(toastLiveExample)
        toast.show()
    }

    return <>
        <div class="position-fixed bottom-0 end-0 p-3" style={{ zIndex: "11" }}>
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">

                    <strong class="me-auto">Bootstrap</strong>

                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {msg}
                </div>
            </div>
        </div>
    </>

}

export default toast