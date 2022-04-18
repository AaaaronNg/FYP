const { Conversation } = require("../model/conversation")
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");
const mongoose = require("mongoose");



const addConversation = async (body) => {
    try {

        const exist = await Conversation.find({
            currentUserId: body.currentUserId,
            senderId: body.senderId
        })

        //console.log("exit", exist.length)

        if (exist.length === 0) {
            console.log("new")
            const conversation = new Conversation({
                ...body,
            })
            const conversation_2 = new Conversation({
                currentUserId: body.senderId,
                senderId: body.currentUserId
            })
            await conversation_2.save()
            await conversation.save()
            return conversation
        }
        return exist
    } catch (error) {
        throw error
    }
}

const getConversationById = async (_id) => {
    try {
        const conversation = await Conversation.findById(_id)
        if (!conversation) {
            throw new ApiError(httpStatus.NOT_FOUND, "Conversation not found")
        }
        return conversation
    } catch (error) {
        throw error
    }
}

const getConversationIdByUserId = async (param) => {
    try {
        //console.log(param)
        const conversation = await Conversation.find({
            $or: [
                {
                    $and: [
                        { senderId: param.senderId },
                        { currentUserId: param.currentUserId }
                    ]
                },
                {
                    $and: [
                        { senderId: param.currentUserId },
                        { currentUserId: param.senderId }
                    ]
                }
            ]
        })
        return conversation
    } catch (error) {
        throw error
    }
}

const getCurrentUserCoversation = async (_id) => {
    try {
        const conversation = await Conversation.find({
            currentUserId: { $in: [_id] }
        })
            .populate("senderId")
            .populate("currentUserId")
        return conversation
    } catch (error) {
        throw error
    }
}

module.exports = {
    addConversation,
    getConversationById,
    getCurrentUserCoversation,
    getConversationIdByUserId
}