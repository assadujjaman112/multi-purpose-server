const { getDb } = require("../config/db");

async function getAllUsers(req, res) {
  const result = await getDb().collection("users").find().toArray();
  res.send(result);
}

async function createUser(req, res) {
  const result = await getDb().collection("users").insertOne(req.body);
  res.send(result);
}

module.exports = { getAllUsers, createUser };
