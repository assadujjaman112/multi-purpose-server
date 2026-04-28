const express = require("express");
const router = express.Router();
const { createCartItem, getCartItems } = require("../controllers/carts");

router.post("/", createCartItem);
router.get("/", getCartItems);
module.exports = router;
