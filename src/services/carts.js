const { getDb } = require("../config/db");

async function insertCartItem(cartData) {
  return getDb().collection("carts").insertOne(cartData);
}

async function findCartItems(query) {
  return getDb().collection("carts").find(query).toArray();
}

module.exports = { insertCartItem, findCartItems };
