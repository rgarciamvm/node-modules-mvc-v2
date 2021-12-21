import data_movie from './share/data-movies.js';
import moviesController from './controllers/moviesController.js';
import {new_movie} from './data/newMovie.js';
import {new_movie_update} from './data/newMovie.js';

//CRUD
// Create / Read / Update / Delete

let allMovies = function (data_movie) {
        moviesController.getAllMovies(data_movie);
        data_movie.res.forEach((e) => console.log(e));
 }


let getMovieId = function (data_movie) {
    moviesController.getMovieById(data_movie);
    data_movie.res.forEach((e) => console.log(e));
}

let createMovie = function (data_movie) {
    moviesController.createMovie(data_movie);
    data_movie.res.forEach((e) => console.log(e));
}

let removeMovie = function (data_movie) {
    moviesController.removeMovie(data_movie);
    data_movie.res.forEach((e) => console.log(e));
}

let updateMovie = function (data_movie) {
    moviesController.updateMovie(data_movie);
    data_movie.res.forEach((e) => console.log(e));
}


let getMovieBy = function(data_movie){
    moviesController.getMovieBy(data_movie);
    data_movie.res.forEach((e) => console.log(e));
}


try {

    // Película con id:2
    data_movie.req={id:2};
    getMovieId(data_movie);

    // Eliminar la película con id:2
    data_movie.req={id:2};
    removeMovie(data_movie);

    // Añade una nueva película
    data_movie.req= new_movie;
    createMovie(data_movie);

    // Modifica la película con id:10
    data_movie.req= new_movie_update;
    updateMovie(data_movie);

    //Devuelve todas las peliculas
    allMovies(data_movie);

    //Todas las peliculas del año 1994
    data_movie.req={key:"year", value: 1994};
    getMovieBy(data_movie);
    
   
} catch (error) {
    console.log(error.message);
}




