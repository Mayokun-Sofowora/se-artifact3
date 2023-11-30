// backend/index.js

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const userModule = require("./userModule"); // Import the user module
const app = express();

app.use(cors());
app.use("/api", routes); // Existing routes
app.use(express.json());

// Use the user module in a route
app.get("/users", async (req, res) => {
  try {
    const users = await userModule.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Other routes...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
