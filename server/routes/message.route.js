const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller")
const auth = require("../middleware/auth");
const message = require("../model/message");


router.post(
    "/",
    messageController.addMessage
)

router.get("/importMsg/id_1/:id_1/id_2/:id_2",
    messageController.getMessages
)



module.exports = router