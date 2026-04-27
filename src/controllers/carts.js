const { getDb } = require("../config/db");

async function createCartItem(req, res) {
  try {
    const result = await getDb().collection("carts").insertOne(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to add item to cart" });
  }
}

module.exports = { createCartItem };
