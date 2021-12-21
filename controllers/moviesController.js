import moviesModel from '../models/moviesModel.js';


const getAllMovies = (data_movie) => {

    data_movie.res = moviesModel.getMovies();
    if (typeof data_movie.res == 'undefined') {
        throw new Error('Ups! No hay Movies');
    }

}

const getMovieById = (data_movie) => {
    if (!data_movie.req.id)
        throw new Error('Ups! id no existe');

    const id = data_movie.req.id;
    const movie = moviesModel.getMovieById(id);
    if (typeof movie == 'undefined') {
        throw new Error('Ups! No hay Movies');
    }
    data_movie.res.push(movie);
}

const removeMovie = (data_movie) => {

    if (!data_movie.req.id)
        throw new Error('Ups! id no existe');

    const ind = moviesModel.removeMovie(data_movie.req.id);
    if (ind == -1)
        throw new Error('Ups! id no existe');

    // decision... 
    // data_movie.res = moviesModel.getMovies();  
    getAllMovies(data_movie);
}

const createMovie = (data_movie) => {

    if (!data_movie.req.id)
        throw new Error('Ups! id no existe');

    const movie = moviesModel.createMovie(data_movie.req);
    if (typeof movie == 'undefined') {
        throw new Error('Ups! No hay Movies');
    }
    data_movie.res = moviesModel.getMovies();


}

const updateMovie = (data_movie) => {
    if (!data_movie.req.id)
        throw new Error('Ups! movie no existe');

    const movie = moviesModel.updateMovie(data_movie.req);
    if (typeof movie == 'undefined')
        throw new Error('Ups! movie no existe');

    getAllMovies(data_movie);
}

const getMovieBy = (data_movie) => {

    if (!data_movie.req.key)
        throw new Error('Ups! key no existe');

    const movies = moviesModel.getMovieBy(data_movie.req);
    if (movies.length == 0) {
        throw new Error('Ups! Movies no encontradas');
    }
    data_movie.res = movies;

}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy
}