const { insertBooking } = require("../services/bookings");
const { sendSuccess, sendError } = require("../utils/response");

async function createBooking(req, res) {
  try {
    const data = await insertBooking(req.body);
    sendSuccess(res, data, 201);
  } catch (err) {
    sendError(res, "Failed to create booking");
  }
}

module.exports = { createBooking };
