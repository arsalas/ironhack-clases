
const getPokemon = async () => {
   const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
   const data = await pokemon.json() 
   return data;
}

const main = async () =>{
console.log(await getPokemon())
}

main();