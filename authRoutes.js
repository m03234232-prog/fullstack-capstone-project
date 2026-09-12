const express = require("express");
const router = express.Router();

const { connectToDatabase } = require("../db");

router.get("/api/auth", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const users = db.collection("users");

    const user = await users.findOne({
      username: req.query.username
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
