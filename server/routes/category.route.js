const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const categoryController = require("../controllers/category.controller");


router
    .route("/category/:id")
    .get(categoryController.getCategory)
    .delete(auth("deleteAny", "category"), categoryController.deleteCategory)

router.post(
    "/category",
    auth("createAny", "category"),
    categoryController.addCategory
)

router.get("/all", categoryController.getCategories);

module.exports = router