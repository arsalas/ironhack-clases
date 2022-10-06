import { getPopularMovies } from "../api.js"
import { printMovieCard } from "../movieCard.js";


const printPopularsMovies = async () => {
    const response = await getPopularMovies();
    const populars = response.results;
    let html = '';
    populars.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title)
    })
    document.querySelector('#populars .columns').innerHTML = html;
}

export const loadPopulars = async () => {
printPopularsMovies();
}