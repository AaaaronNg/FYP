const { conversationService } = require("../services")

const conversationController = {
    async addConversation(req, res, next) {
        try {
            //console.log(req.body)
            const conversation = await conversationService.addConversation(req.body)

            res.json(conversation)
        } catch (error) {
            next(error)
        }
    },
    async getConversationById(req, res, next) {
        try {
            const _id = req.params.id
            //console.log(_id)
            const conversation = await conversationService.getConversationById(_id)
            res.json(conversation)
        } catch (error) {
            next(error)
        }
    },
    async getCurrentUserCoversation(req, res, next) {
        try {
            const currentUserId = req.params.id
            const conversation = await conversationService
                .getCurrentUserCoversation(currentUserId)
            res.json(conversation)
        } catch (error) {
            next(error)
        }
    },
    async getConversationIdByUserId(req, res, next) {
        try {
            //console.log(req.params)
            // console.log(req.params.senderId)
            // console.log(req.params.currentUserId)

            const chat = await conversationService
                .getConversationIdByUserId(req.params)
            //console.log(chat)
            res.json(chat)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = conversationController