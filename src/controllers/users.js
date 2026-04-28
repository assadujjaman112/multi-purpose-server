const { findAllUsers, insertUser } = require("../services/users");

async function getAllUsers(req, res) {
  try {
    const result = await findAllUsers();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch users" });
  }
}

async function createUser(req, res) {
  try {
    const result = await insertUser(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to create user" });
  }
}

module.exports = { getAllUsers, createUser };
