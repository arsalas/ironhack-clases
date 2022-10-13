import { FastAverageColor } from 'fast-average-color'

export const getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

// Creamos una funcion que nos retornara el color predominante  de una imagen
export const getColorByImage = async (image) => {
    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(image)
    return color.hex
}