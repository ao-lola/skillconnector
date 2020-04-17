const express = require("express");
const router = express.Router();

//test profile
router.get("/test", (req, res) => res.json({ msg: "profiles works" }));

module.exports = router;
