const express = require("express");
const router = express.Router();

//test users
router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
