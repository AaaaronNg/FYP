const { Message } = require("../model/message")
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");
const mongoose = require("mongoose");


const addMessage = async (body) => {
    try {
        const msg = new Message({
            ...body
        })
        await msg.save()
        return msg
    } catch (error) {
        throw error
    }
}


const getMessages = async (params) => {
    try {
        console.log(params)
        const msgs = await Message.find({
            $or: [
                { conversationId: params.id_1 },
                { conversationId: params.id_2 }
            ]
        })

        // if (!msg) {
        //     throw new ApiError(httpStatus.NOT_FOUND, "msg not found");
        // }
        return msgs
    } catch (error) {
        throw msg
    }
}

module.exports = {
    addMessage,
    getMessages
}