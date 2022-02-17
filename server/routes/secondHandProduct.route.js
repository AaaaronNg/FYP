const express = require("express")
const router = express.Router()
const secondHandProductsController = require("../controllers/secondHandProducts.controller")
const auth = require("../middleware/auth");





router.post(
    "/",
    auth("createAny", "secondHandProduct"),
    secondHandProductsController.addSecondHandProduct
);

router
    .route("/secondHandProduct/:id")
    .get(secondHandProductsController.getSecondHandProduct)
    .patch(auth("updateAny", "secondHandProduct"), secondHandProductsController.updateSecondHandProdcut)
    .delete(auth("deleteAny", "secondHandProduct"), secondHandProductsController.deleteSecondHandProduct)

router.get("/all", secondHandProductsController.allSecondHandProduct)
router.post("/paginate/all", secondHandProductsController.paginateSecondHandProducts)

module.exports = router