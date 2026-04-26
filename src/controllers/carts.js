const { getDb } = require("../config/db");

async function createCartItem(req, res) {
  const result = await getDb().collection("carts").insertOne(req.body);
  res.send(result);
}

module.exports = { createCartItem };
