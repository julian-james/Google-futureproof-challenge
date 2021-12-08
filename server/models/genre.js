const genresData = require("../data");

class Genre{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.movies = data.movies;
    }
    static get all(){
        const genres = genresData.map((genre) => new Genre(genre));
        return genres;
    }
    static findByGenre(genreType){
        const genreData = genresData.filter((genre) => genre.name === genreType)[0];
        return genreData.movies;
    }
    static findByGenreId(genreType, id){
        const genreData = genresData.filter((genre) => genre.name === genreType)[0];
        const movieData = genreData.movies.filter((movie) => movie.id === id)[0];
        return movieData;
    }
};
module.exports = Genre;