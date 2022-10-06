import { getNowPlayingMovies } from "../api.js"
import { printMovieCard } from "../movieCard.js";


const printNowPlayingMovies = async () => {
    const response = await getNowPlayingMovies();
    const nowPlaying = response.results;
    let html = '';
    nowPlaying.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title)
    })
    document.querySelector('#nowPlaying .columns').innerHTML = html;
}

export const loadNowPlaying = async () => {
    printNowPlayingMovies();
}