const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const conversationSchema = mongoose.Schema({
    senderId: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    currentUserId: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    { timestamps: true }
)

const Conversation = mongoose.model("Conversation", conversationSchema)

module.exports = { Conversation }