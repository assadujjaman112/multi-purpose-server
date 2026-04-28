const { insertCartItem, findCartItems } = require("../services/carts");
const { sendSuccess, sendError } = require("../utils/response");

async function getCartItems(req, res) {
  try {
    const { email } = req.query;
    const query = email ? { customerEmail: email } : {};
    const data = await findCartItems(query);
    sendSuccess(res, data);
  } catch (err) {
    sendError(res, "Failed to get cart items");
  }
}

async function createCartItem(req, res) {
  try {
    const data = await insertCartItem(req.body);
    sendSuccess(res, data, 201);
  } catch (err) {
    sendError(res, "Failed to add item to cart");
  }
}

module.exports = { createCartItem, getCartItems };
