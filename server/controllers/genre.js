const express = require("express");
const router = express.Router();
const Genre = require("../models/genre")
const cors = require('cors');

<<<<<<< HEAD
=======
// THIS router.use(cors()) NEEDS TO BE ABOVE OTHER CODE BLOCKS
>>>>>>> e6c45bcbcea748850936f0749701a164595b3d4e
router.use(cors());

router.get("/", (req, res) => {
    const genre = Genre.all;
    res.send(genre);
});

router.get("/:genre", (req, res) => {
    const genreType = req.params.genre;
    const movieList = Genre.findByGenre(genreType);
    res.send(movieList);
});

router.get("/:genre/:id", (req, res) => {
    const genreType = req.params.genre;
    const movieId = parseInt(req.params.id);
    const movie = Genre.findByGenreId(genreType, movieId);
    res.send(movie);
});

module.exports = router;