const { insertCartItem, findCartItems } = require("../services/carts");

async function createCartItem(req, res) {
  try {
    const result = await insertCartItem(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to add item to cart" });
  }
}

async function getCartItems(req, res) {
  try {
    const { email } = req.query;
    const query = email ? { customerEmail: email } : {};
    const result = await findCartItems(query);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to get cart items" });
  }
}

module.exports = { createCartItem, getCartItems };
