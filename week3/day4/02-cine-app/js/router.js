import { loadHome } from "./controllers/home.js";
import { loadNowPlaying } from "./controllers/nowPlaying.js";
import { loadPopulars } from "./controllers/populars.js";


const loadPage = async (file) => {
    const html = await fetch(file).then(res => res.text());
    document.querySelector('#app').innerHTML = html
}

export const router = async () => {
    console.log(location.hash)
    if (location.hash == '') {
        console.log('home')
        await loadPage('./views/home.html');
        loadHome();
    } else if (location.hash == '#now-playing') {
        await loadPage('./views/nowPlaying.html');
        loadNowPlaying();
    } else if (location.hash == '#populars') {
        await loadPage('./views/populars.html');
        loadPopulars()
    } else if (location.hash.includes('#details')) {
        const path = location.hash.split('/');
        await loadPage('./views/details.html')

    } else if (location.hash.includes('#search')) {
        await loadPage('./views/search.html');
    } else {
        await loadPage('./views/404.html')
    }

}