const { getDb } = require("../config/db");

async function insertCartItem(cartData) {
  return getDb().collection("carts").insertOne(cartData);
}

module.exports = { insertCartItem };
