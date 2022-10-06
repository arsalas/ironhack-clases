import { getMovieDetails, getMovieVideo, IMG_URL } from "../api.js"


const printBackdrop = (image) => {
    console.log('imagen', image)
    console.log(document.querySelector('#backdrop'))
    document.querySelector('#backdrop').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25),
    rgba(0,0,0,1)), url('${IMG_URL + image}')`
}

const printDetails = (movie) => {
    document.querySelector('.title').innerHTML = movie.title;
    document.querySelector('.tagline').innerHTML = movie.tagline;
    document.querySelector('.movie-content').innerHTML = movie.overview;
    document.querySelector('#rate').innerHTML = movie.vote_average;
    if (movie.homepage) document.querySelector('#website').href = movie.homepage
    else document.querySelector('#website').innerHTML = ''
}

const printGenres = (gernes) => {
    let html = '';
    gernes.map(genre => {
        html += `<span class="tag is-dark is-rounded">${genre.name}</span>`
    })
    document.querySelector('#genres').innerHTML = html
}

const printTrailer = (video) => {
    document.querySelector('iframe').src = `https://www.youtube.com/embed/${video}`
}

export const loadDetails = async (id) => {
    const details = await getMovieDetails(id);
    console.log(details);
    // Comprobamos si existe al pelicula
    if (details.success && details.success == false) {
        location.hash = '#not-found'
    }
    const videoInfo = await getMovieVideo(id);
    printBackdrop(details.backdrop_path);
    printDetails(details);
    printGenres(details.genres);
    if (videoInfo.results.length > 0)
        printTrailer(videoInfo.results[0].key)
    else {
        document.querySelector('.video').innerHTML = '<h2 class="title has-text-centered">Trailer no disponible</h2>'
    }

}