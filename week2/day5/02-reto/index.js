// Reto 1 - hacer un fetch a la pokeapi y mostrar el nombre del pokemon en  un console.log
// Reto 2 - Hacer un html con un input y una lista y darle estilo
// Reto 3 - Hacer que al pulsar una tecla en el input se vea en un console.log el valor del input
// Reto 4 - Hacer una array con la informacion de los 151 primeros pokemons
// Reto 5 - Mostrar en la lista el nombre y la imagen de los pokemons

// Opcion A - hacemos una peticion despues de que termine la anterior
const getData = async () => {
    const pokemons = [];
    for (let i = 1; i <= 151; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        const data = await response.json();
        pokemons.push(data)
    }
    console.log(pokemons);





}

// Hacemos una peticion a la pokeapi
const pokeApi = (id) => {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + id)
}

// Pedimos la informacion de quantity pokemons
// Opcion B - Hacemos todas las peticiones a la vez
const getAllPokemons = async (quantity) => {
    const promises = [];
    // Guardamos en una array la promesa del fetch
    for (let i = 1; i <= quantity; i++) {
       promises.push(pokeApi(i))
    }
    // console.log(promises)
    // Esperamos a que todas las promesas de fetch terminen
    const data = await Promise.all(promises);
    // console.log(data);
    // Creamos una nueva array con la promesa del .json()
    const responses = data.map((response) => {
        return response.json()
    })
    // console.log(responses)
    // Esperamos a que se resuelva la promesa del json
    const pokemons = await Promise.all(responses)
    // console.log(pokemons)
    return pokemons
}

const search = document.querySelector('#search');
search.addEventListener('keyup', ()=>{
   console.log(search.value) 
} )

// No podemos hacer un await fuera de una funcion async
// const pokemon = await  getAllPokemons(151)

// OPCION - A 
const main = async () =>{

}
main()
// OPCION - B
// Este evento se ejecutara cuando inicie la pagina
window.addEventListener('load', async () => {
   
    // OPCION A
    // const pokemons = [];
    // for (let i = 1; i <= 151; i++) {
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
    //     const data = await response.json();
    //     pokemons.push(data)
    // }
    // OPCION - B
    const pokemons = await getAllPokemons(151)
    console.log(pokemons);

})


