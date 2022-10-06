export const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const apiKey = '3c4b4a0cb658958a46e938cc9d8ade07';
const lang = 'es';

const api = async (endpoint, params) => {
    let url = `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&language=${lang}`;
    if (params) url += params;
    const response = await fetch(url).then(res => res.json());
    return response;
}

export const getPopularMovies = async () => {
    const res = await api('movie/popular');
    return res;
}

export const getNowPlayingMovies = async () => {
    const res = await api('movie/now_playing');
    return res;
}

export const getMovieDetails = async (id) => {
    const res = await api('movie/' + id);
    return res;
}

export const getMovieVideo = async (id) => {
    const res = await api(`movie/${id}/videos`);
    return res;
}

export const searchMovie = async (query) => {
    const res = await api('search/movie', `&query=${query}`);
    return res;
}