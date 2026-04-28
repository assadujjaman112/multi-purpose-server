const { getDb } = require("../config/db");

async function insertBooking(bookingData) {
  return getDb().collection("bookings").insertOne(bookingData);
}

module.exports = { insertBooking };
