const { getDb } = require("../config/db");

async function createBooking(req, res) {
  const result = await getDb().collection("bookings").insertOne(req.body);
  res.send(result);
}

module.exports = { createBooking };
