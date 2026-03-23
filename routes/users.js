const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});
router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router.get("/:id", (req, res) => {
  res.send(`Get User With ID ${req.params.id}`);
});

module.exports = router;
