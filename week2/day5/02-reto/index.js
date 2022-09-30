// Reto 1 - hacer un fetch a la pokeapi y mostrar el nombre del pokemon en  un console.log
// Reto 2 - Hacer un html con un input y una lista y darle estilo
// Reto 3 - Hacer que al pulsar una tecla en el input se vea en un console.log el valor del input
// Reto 4 - Hacer una array con la informacion de los 151 primeros pokemons
// Reto 5 - Mostrar en la lista el nombre y la imagen de los pokemons


// Paso 1
const paso1 = async () => {
    // Fetch retorna una promesa con una respuesta
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    // json retorna una promesa con el contenido del fetch
    const data = await response.json();
    console.log(data.name)
}

// Paso 2
// Hace el html con un input

// Paso 3
const paso3 = () => {
    const input = document.querySelector('#search');
    input.addEventListener('keyup', () => {
        console.log(input.value);
    })
}

// Paso4
const paso4A = async () => {
    // OPCION A (LA QUE HAY QUE ENTENDER)
    // Creamos la array donde vamos a guardar la informacion de los pokemons
    const pokemons = [];
    // Buscamos los pokemon con los id del 1 al 151
    for (let id = 1; id <= 151; id++) {
        // fetch nos da le respuesta de la peticion
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // con el json obtenemos la informacion de la respuesta
        const data = await response.json();
        // Guardamos la informacion del pokemon en la array que hemos creado
        pokemons.push(data)
    }
    // En la variable pokemons tendremos la informacion de todos los pokemons que hemos consultado
}

const paso4B = async () => {
    const fetches = [];

    for (let id = 1; id <= 151; id++) {
        const fetchs = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        fetches.push(fetchs)
    }
    // Despues del for tendremos una array con las promesas de los pokemon
    const data = await Promise.all(fetches);
    const responses = [];
    // Recorremos la array con las respuestas de la promesa del fetch
    for (let i = 0; i < data.length; i++) {
        // En element tenemos el resultado de la promesa, linea 13 del paso1
        const element = array[i];
        const promesaJson = element.json();
        responses.push(promesaJson);
    }
    // Tendremos en respones una array con las promesas del json
    const pokemons = await Promise.all(responses);
}

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
search.addEventListener('keyup', () => {
    console.log(search.value)
})

// No podemos hacer un await fuera de una funcion async
// const pokemon = await  getAllPokemons(151)

// OPCION - A 
const main = async () => {

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


