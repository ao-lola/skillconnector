const express = require("express");
const router = express.Router();

//test posts
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
