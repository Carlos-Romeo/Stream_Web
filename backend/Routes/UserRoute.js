const express = require("express");
const userCtrl = require("../Controllers/UserController")
const filmCtrl = require("../Controllers/FilmController")

const router = express.Router()

router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)
router.post("/film", filmCtrl.Film)

module.exports = router