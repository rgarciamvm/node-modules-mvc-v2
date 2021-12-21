//import movies from '../data/movies.js';
import movies from '../managers/manager-fs.js'

class MoviesModel {
    getMovies() {
        return movies;
    }
    getMovieById(id) {
        return movies.find(element => element.id == id);
    }

    getMovieBy(elem) {
        return movies.filter(element => element[elem.key] == elem.value);
    }

    removeMovie(id) {
        const index = movies.findIndex(element => element.id == id);
        if (index != -1) movies.splice(index, 1);
        return index;
    }

    createMovie(req) {
        movies.push(req);
        return req;
    }

    updateMovie(req) {
        const movie = this.getMovieById(req.id);
        if (typeof movie != 'undefined') {
            this.removeMovie(req.id);
            this.createMovie(req);
        }
        return req;
    }

}

export default new MoviesModel()
