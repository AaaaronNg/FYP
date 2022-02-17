import React, { useEffect, useRef } from "react"

import Message from "./message"


const Messagebox = ({ user, messages }) => {
    const scrollRef = useRef();




    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


    return <>
        <div style={{ "overflow": "scroll", "height": 600 }}>
            <ul class="list-group" style={{ "list-style-type": "none" }}>
                {
                    messages ? messages.map((item, i) => (
                        <>
                            <div ref={scrollRef} key={i}>
                                <Message item={item} currentUserId={user.data._id} />
                            </div>
                        </>
                    )) : <div>no conversation</div>
                }


            </ul>
        </div>
    </>
}

export default Messagebox