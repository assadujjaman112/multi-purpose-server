const { insertCartItem } = require("../services/carts");

async function createCartItem(req, res) {
  try {
    const result = await insertCartItem(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to add item to cart" });
  }
}

module.exports = { createCartItem };
