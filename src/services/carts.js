const { getDb } = require("../config/db");

async function insertCartItem(cartData) {
  const { _id, ...data } = cartData;
  return getDb().collection("carts").insertOne(data);
}

async function findCartItems(query) {
  return getDb().collection("carts").find(query).toArray();
}

async function removeCartItem(query) {
  return getDb().collection("carts").deleteOne(query);
}

module.exports = { insertCartItem, findCartItems, removeCartItem };
