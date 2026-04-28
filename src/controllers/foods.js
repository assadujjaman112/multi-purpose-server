const { findAllFoods, insertFood } = require("../services/foods");

async function getAllFoods(req, res) {
  try {
    const result = await findAllFoods();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch foods" });
  }
}

async function createFood(req, res) {
  try {
    const result = await insertFood(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create food" });
  }
}

module.exports = { getAllFoods, createFood };
