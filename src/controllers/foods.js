const { getDb } = require("../config/db");

async function getAllFoods(req, res) {
  const result = await getDb().collection("foods").find().toArray();
  res.send(result);
}

async function createFood(req, res) {
  const result = await getDb().collection("foods").insertOne(req.body);
  res.send(result);
}

module.exports = { getAllFoods, createFood };
