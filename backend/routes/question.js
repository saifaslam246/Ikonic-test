const express = require("express");
const router = express.Router();
const { newQuestion, allQuestion } = require("../controllers/questionController");

router.route("/questions").post(newQuestion);
router.route("/test").get(allQuestion);

module.exports = router;
