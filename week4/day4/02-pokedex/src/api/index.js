import axios from 'axios';
import { limitPokemons } from '../config';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 3000
});

export const getPokemons = async () => {
    const response = await pokeApi.get('pokemon?limit=' + limitPokemons);
    return response.data;
}

export const getPokemonDetails = async (id) => {
    const response = await pokeApi.get('pokemon/' + id);
    return response.data;
}