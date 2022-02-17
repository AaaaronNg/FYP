import React, { useEffect } from "react"
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux"


const VerifyPage = (props) => {

    const users = useSelector(state => state.users)


    useEffect(() => {
        if (users.data.verified) {
            setTimeout(function () {
                props.history.push("/")
            }, 3000);
        }
    });

    return <>
        <div class="text-center py-4">
            <AiFillCheckCircle style={{ color: "green" }} size={100} />
            <div class="fs-1 py-5">
                Your Email has been verified
            </div>

            <div class="fs-1">
                redirecting ...
            </div>

        </div>

    </>

}

export default VerifyPage