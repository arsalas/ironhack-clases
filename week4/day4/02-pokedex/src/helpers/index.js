import { FastAverageColor } from 'fast-average-color'

// export const getPokemonImage = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
export const getPokemonImage = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const getColorByImage = async (image) => {

    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(image)
    return color.hex;
}