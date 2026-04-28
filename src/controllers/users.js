const { findAllUsers, insertUser } = require("../services/users");
const { sendSuccess, sendError } = require("../utils/response");

async function getAllUsers(req, res) {
  try {
    const data = await findAllUsers();
    sendSuccess(res, data);
  } catch (err) {
    sendError(res, "Failed to fetch users");
  }
}

async function createUser(req, res) {
  try {
    const data = await insertUser(req.body);
    sendSuccess(res, data, 201);
  } catch (err) {
    sendError(res, "Failed to create user");
  }
}

module.exports = { getAllUsers, createUser };
