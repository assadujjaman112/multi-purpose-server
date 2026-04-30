const cartsService = require("../services/carts");
const { sendSuccess, sendError } = require("../utils/response");

async function getCartItems(req, res) {
  try {
    const { email } = req.query;
    const query = email ? { customerEmail: email } : {};
    const data = await cartsService.findCartItems(query);
    sendSuccess(res, data);
  } catch (err) {
    sendError(res, "Failed to get cart items");
  }
}

async function createCartItem(req, res) {
  try {
    const data = await cartsService.insertCartItem(req.body);
    sendSuccess(res, data, 201);
  } catch (err) {
    sendError(res, "Failed to add item to cart");
  }
}

async function updateCartItem(req, res) {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!id || !quantity) {
      return sendError(res, "Cart item ID and quantity are required", 400);
    }

    const result = await cartsService.updateCartItem(id, { quantity });

    if (result.matchedCount === 0) {
      return sendError(res, "Cart item not found", 404);
    }

    sendSuccess(res, { modifiedCount: result.modifiedCount });
  } catch (err) {
    sendError(res, "Failed to update cart item");
  }
}

async function deleteCartItem(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return sendError(res, "Cart item ID is required", 400);
    }

    const result = await cartsService.removeCartItem(id);

    if (result.deletedCount === 0) {
      return sendError(res, "Cart item not found", 404);
    }

    sendSuccess(res, { deletedCount: result.deletedCount });
  } catch (err) {
    sendError(res, "Failed to delete cart item");
  }
}

module.exports = { createCartItem, getCartItems, updateCartItem, deleteCartItem };
