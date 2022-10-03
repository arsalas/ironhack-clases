const btn = document.querySelector('#btn-hamburgesa');
const menu = document.querySelector('#menu-hamburguesa');


btn.addEventListener('click', () => {

    // classList nos da las clases que tiene un elemento
    // toggle quita o pone una clase en funcion si ya la tiene o no
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');

})