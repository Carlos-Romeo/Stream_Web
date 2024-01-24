const express = require("express");
const filmCtrl = require("../Controllers/FilmController")



const router = express.Router()



router.post("/film", filmCtrl.Film);
router.get("/recupFilm", filmCtrl.FilmRecu);

module.exports = router