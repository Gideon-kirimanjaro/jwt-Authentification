const express = require("express");
const { logIn, dashBoard } = require("../controllers/main");
const router = express.Router();

router.route("/logIn").post(logIn);
router.route("/dashBoard").get(dashBoard);

module.exports = { router };
