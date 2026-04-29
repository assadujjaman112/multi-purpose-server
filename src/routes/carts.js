const express = require("express");
const router = express.Router();
const cartsController = require("../controllers/carts");

router.post("/", cartsController.createCartItem);
router.get("/", cartsController.getCartItems);
router.delete("/:id", cartsController.deleteCartItem);
module.exports = router;
