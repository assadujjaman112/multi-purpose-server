const { ObjectId } = require("mongodb");
const { getDb } = require("../config/db");

function buildIdQuery(id) {
  if (ObjectId.isValid(id)) {
    return { $or: [{ _id: ObjectId.createFromHexString(id) }, { _id: id }] };
  }
  return { _id: id };
}

async function insertCartItem(cartData) {
  const { _id, ...data } = cartData;
  return getDb().collection("carts").insertOne(data);
}

async function findCartItems(query) {
  return getDb().collection("carts").find(query).toArray();
}

async function updateCartItem(id, updateData) {
  return getDb().collection("carts").updateOne(buildIdQuery(id), { $set: updateData });
}

async function removeCartItem(id) {
  return getDb().collection("carts").deleteOne(buildIdQuery(id));
}

module.exports = {
  insertCartItem,
  findCartItems,
  removeCartItem,
  updateCartItem,
};
