const express = require("express")
const router = express.Router()
const conversationController = require("../controllers/conversation.controller")
const auth = require("../middleware/auth")



router.post(
    "/",
    conversationController.addConversation
)

router
    .route("/conversation/:id")
    .get(conversationController.getConversationById)

router
    .route("/conversation/currentUser/:id")
    .get(conversationController.getCurrentUserCoversation)

router
    .route("/conversationObjs/senderId/:senderId/currentUserId/:currentUserId")
    .get(conversationController.getConversationIdByUserId)

module.exports = router