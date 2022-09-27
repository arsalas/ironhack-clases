
/*
// Me guarda el primer nodo que encuentra
// esto devuelve un elemento div
const div = document.querySelector('div');

// Guardar todos los nodos que encuentra en una array
// Devuelve una array con todos los elementos div
const AllDiv = document.querySelectorAll('div')

const p = document.querySelectorAll('.item p')
// p es una array
p.length;
for (let i = 0; i < p.length; i++) {
    const element = p[i];
    
}

const id = document.querySelector('#input')


const items = document.querySelector('.item');
items.querySelector('p')

const itemsArr = document.querySelectorAll('.item');
// No se puede hacer un query selector de una array
itemsArr.querySelector();
for (let i = 0; i < itemsArr.length; i++) {
    const element = itemsArr[i];
    element.querySelector();
    
}

*/

console.log(document.querySelector('.item').innerHTML);
console.log(document.querySelectorAll('.item'))
const items = document.querySelectorAll('.item');
// innerHTML nos da el contido de html que tiene el nodo

for (let i = 0; i < items.length; i++) {
   console.log(items[i].innerHTML);
//    console.log(items[i].querySelector('div').innerHTML);
   items[i].innerHTML += '<h1 class="titulo">Titulo</h1>'
   console.log(items[i].innerHTML)
}


