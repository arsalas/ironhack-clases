import axios from 'axios'
import { limitPokemons } from '../config'

//axios es un equivalente a fetch

//creamos una instancia de la pokeapi
// timeout corta la peticion cuando pasa el timepo en ms
const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 3000
})

export const getPokemons = async () => {
    const response = await pokeApi.get('pokemon?limit=' + limitPokemons);
    //.data es parecido al .json del fetch pero no es una promesa
    return response.data
}   

// Obtendremos la informacion de un pokemon por su id
export const getPokemonDetails = async (id) => {
    const response = await pokeApi.get('pokemon/' + id);
    return response.data;
}