const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const usersController = require("../controllers/users.controller");

router
  .route("/profile")
  .get(auth("readOwn", "profile"), usersController.profile)
  .patch(auth("updateOwn", "profile"), usersController.updateProfile);

router.patch(
  "/email",
  auth("updateOwn", "profile"),
  usersController.updateUserEmail
);

router.patch(
  "/updateCart",
  auth("updateOwn", "profile"),
  usersController.updateUserCart
)

router.patch(
  "/removeFromCart",
  auth("updateOwn", "profile"),
  usersController.removeFromCart
)

router.get("/verify", usersController.verifyAccount);

module.exports = router;
