import { getNowPlayingMovies, getPopularMovies } from "../api.js"
import { printMovieCard } from "../movieCard.js";


const printPopularMovies = async ()=>{
    const response = await getPopularMovies();
    // Me quedo con las 12 primera peliculas de la array
    const populars = response.results.splice(0, 12);
    let html = '';
    populars.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title);
    })
    document.querySelector('#populars .columns').innerHTML = html;
}

const printNowPlatingMovies = async ()=>{
    const response = await getNowPlayingMovies();
    // Me quedo con las 12 primera peliculas de la array
    const nowPlaying = response.results.splice(0, 12);
    let html = '';
    nowPlaying.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title);
    })
    document.querySelector('#nowPlaying .columns').innerHTML = html;
}

// cargue la pagina
export const loadHome = async () => {

    // cargar populares
    printPopularMovies()
    //cargar en cartelera
    printNowPlatingMovies()
}