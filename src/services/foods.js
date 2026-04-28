const { getDb } = require("../config/db");

async function findAllFoods() {
  return getDb().collection("foods").find().toArray();
}

async function insertFood(foodData) {
  return getDb().collection("foods").insertOne(foodData);
}

module.exports = { findAllFoods, insertFood };
