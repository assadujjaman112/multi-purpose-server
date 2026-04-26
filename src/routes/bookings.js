const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/bookings");

router.post("/", createBooking);

module.exports = router;
