import React from "react"
import Moment from "react-moment"


const Message = ({ item, currentUserId }) => {

    //console.log(currentUserId)

    //console.log(item)

    //console.log("testing Message", item)

    return <>
        <li class="pt-3" >

            <div class={currentUserId === item.senderId ? "float-end" : "float-start"} >
                <div class="pb-3">
                    <div class="p-3 badge rounded-pill bg-primary" >
                        {item.text}

                    </div>
                    <div class="px-3">
                        <div class={currentUserId === item.senderId ? "float-end" : "float-start"}>
                            <div class="text-muted small" >
                                <Moment to={item.createdAt}></Moment>
                            </div>

                        </div>
                    </div>

                </div>




            </div>

        </li>




    </>
}

export default Message