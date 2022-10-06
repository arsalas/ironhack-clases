import { router } from './js/router.js';

// menu hamburguesa
const btn = document.querySelector('#btn-menu');
const menu = document.querySelector('#items-menu');

// Escuchamos el cambio de la url
window.addEventListener('popstate', router)

// Escuchamos el evento de submit del formulariop
document.querySelector('#form-search').addEventListener('submit', (e) => {
    e.preventDefault();
    // Cambiamos la url
    location.hash = '#search?query=' + document.querySelector('#input-search').value;
    document.querySelector('#input-search').value = '';
})

// menu hamburguesa
btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})

router()