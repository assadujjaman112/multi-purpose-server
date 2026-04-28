const { insertBooking } = require("../services/bookings");

async function createBooking(req, res) {
  try {
    const result = await insertBooking(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create booking" });
  }
}

module.exports = { createBooking };
