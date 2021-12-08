const express = require("express");
const router = express.Router();
const Genre = require("../models/genre")

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