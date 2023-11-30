// userModule.js
const db = require("./db");

async function getAllUsers() {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

module.exports = {
  getAllUsers,
};
