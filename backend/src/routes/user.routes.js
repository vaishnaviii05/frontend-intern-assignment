const express = require("express");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
});

router.put("/me", auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true });
  res.json(user);
});

module.exports = router;
