import Pokemon from "./Pokemon.interface";

const fetchPokemonImageAndId = async (name: string) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const pokemonData: Pokemon = await response.json();
        return {name, id: pokemonData.id, image: pokemonData.sprites.other["official-artwork"].front_default}
    }
    catch(error){
        console.error(error)
    }
}
export default fetchPokemonImageAndId