const express = require("express");
const router = express.Router();
const { createCartItem } = require("../controllers/carts");

router.post("/", createCartItem);

module.exports = router;
