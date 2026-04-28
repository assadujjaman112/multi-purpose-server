const { getDb } = require("../config/db");

async function findAllUsers() {
  return getDb().collection("users").find().toArray();
}

async function insertUser(userData) {
  return getDb().collection("users").insertOne(userData);
}

module.exports = { findAllUsers, insertUser };
