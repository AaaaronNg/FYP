import React from "react"
import Loader from "../../utils/loader"


const Conversation = ({ conversations, getCoversationId, getReceiverId }) => {
    //const [currentChat, setCurrentChat] = useState(null)



    // useEffect(() => {
    //     //console.log(currentChat.currentUserId._id)
    //     const messages = getCurrentUserMessages(currentChat.currentUserId._id)
    //     messages.then(values => console.log(values)).catch((error) => console.log(error))
    // }, [currentChat.currentUserId._id])


    //console.log(conversations)
    const generateList = () => (
        conversations ?
            conversations.map((item, i) => (
                <a href="#" key={i}
                    class="list-group-item list-group-item-action border-0"
                    onClick={() => {
                        getCoversationId(item._id)
                        getReceiverId(item.senderId)
                    }}>
                    <div class="badge bg-success float-end">5</div>
                    <div class="d-flex align-items-start">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40" />
                        <div class="flex-grow-1 ml-3">
                            {item.senderId.firstname} {item.senderId.lastname}
                            <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                        </div>
                    </div>
                </a>
            )) : null
    )

    return <>

        {
            conversations ? generateList() : <Loader />
        }


    </>
}

export default Conversation