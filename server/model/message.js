const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    conversationId: {
        require: [true, "need coversationId"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation"
    },
    senderId: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        require: true,
        type: String,
    },
    read: {
        require: true,
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

const Message = mongoose.model("message", messageSchema)
module.exports = {
    Message
}