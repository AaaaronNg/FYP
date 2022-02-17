import axios from "axios"

export const getCurrentUserConversations = async (userId) => {
    try {
        const content = await axios.get(`/api/conversations/conversation/currentUser/${userId}`)

        return content
    } catch (error) {
        console.log(error)
    }

}

export const getCurrentUserConversation = async (conversationId) => {
    try {
        const currentConversation = await axios.get(`/api/conversations/conversation/${conversationId}`)
        return currentConversation
    } catch (error) {
        console.log(error)
    }
}

export const getConversationIdByUserId = async (obj) => {
    try {
        //console.log(currentConversation)
        const conversationIds = await axios.get(`/api/conversations/conversationObjs/senderId/${obj.senderId}/currentUserId/${obj.currentUserId}`)
        //console.log(conversationIds)
        return conversationIds
    } catch (error) {
        console.log(error)
    }
}


export const getCurrentUserMessages = async (obj) => {
    try {
        const content = await axios.get(`/api/messages/importMsg/id_1/${obj.id_1}/id_2/${obj.id_2}`)
        console.log(content)
        return content
    } catch (error) {
        console.log(error)
    }
}

// export const addNewMessages = async (values) => {
//     try {
//         await axios.post(`/api/messages`, values)
//         console.log("success")
//     } catch (error) {
//         console.log(error)
//     }
// }