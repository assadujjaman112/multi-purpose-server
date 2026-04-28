const { findAllFoods, insertFood } = require("../services/foods");
const { sendSuccess, sendError } = require("../utils/response");

async function getAllFoods(req, res) {
  try {
    const data = await findAllFoods();
    sendSuccess(res, data);
  } catch (err) {
    sendError(res, "Failed to fetch foods");
  }
}

async function createFood(req, res) {
  try {
    const data = await insertFood(req.body);
    sendSuccess(res, data, 201);
  } catch (err) {
    sendError(res, "Failed to create food");
  }
}

module.exports = { getAllFoods, createFood };
