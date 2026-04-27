const { getDb } = require("../config/db");

async function createBooking(req, res) {
  try {
    const result = await getDb().collection("bookings").insertOne(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create booking" });
  }
}

module.exports = { createBooking };
