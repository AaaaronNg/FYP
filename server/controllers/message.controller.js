const { messageService } = require("../services")



const messageController = {
    async addMessage(req, res, next) {
        try {
            const msg = await messageService.addMessage(req.body)
            res.json(msg)
        } catch (error) {
            next(error)
        }
    },
    async getMessages(req, res, next) {
        try {
            const msgs = await messageService.getMessages(req.params)
            res.json(msgs)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = messageController 