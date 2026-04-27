const { getDb } = require("../config/db");

async function getAllUsers(req, res) {
  try {
    const result = await getDb().collection("users").find().toArray();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch users" });
  }
}

async function createUser(req, res) {
  try {
    const result = await getDb().collection("users").insertOne(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create user" });
  }
}

module.exports = { getAllUsers, createUser };
