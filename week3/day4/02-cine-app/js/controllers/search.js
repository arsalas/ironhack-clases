import { searchMovie } from '../api.js'
import { printMovieCard } from '../movieCard.js';


const printMovies = async (movies) => {
    let html = '';
    movies.map(movie=> {
        html += printMovieCard(movie.id, movie.poster_path, movie.title)
    })
    document.querySelector('#movies .columns').innerHTML = html;
}

const handleSearch = (e) => {
    e.preventDefault();
    location.hash = '#search?query=' + document.querySelector('#input-search-view').value
}

export const loadSearch = async () => {
    const url = new URL(window.location.href.replace('#', ''));
    const searchParams = url.searchParams;
    const query = searchParams.get('query')
    console.log(query);
    const movies = await searchMovie(query);
    console.log(movies)
    document.querySelector('#search-title').innerHTML = `Resultados ${query}`
    document.querySelector('#input-search-view').value = query;
    document.querySelector('#form-search-view').addEventListener('submit', handleSearch);
    printMovies(movies.results)
}