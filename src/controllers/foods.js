const { getDb } = require("../config/db");

async function getAllFoods(req, res) {
  try {
    const result = await getDb().collection("foods").find().toArray();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch foods" });
  }
}

async function createFood(req, res) {
  try {
    const result = await getDb().collection("foods").insertOne(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create food" });
  }
}

module.exports = { getAllFoods, createFood };
