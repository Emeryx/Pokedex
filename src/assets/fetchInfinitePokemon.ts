import Pokemon from "./Pokemon.interface";

const fetchInfinitePokemon = async ({pageParam = 0}) => {
    try{
        // Fetching Page
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=20`)
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const { results, count } = await response.json();

        // Fetching pokemon data from page results 
        const pokemonData = await Promise.all(
            results.map(async (pokemon: {url: string}) => {
                const pokemonDataResponse = await fetch(pokemon.url)
                const pokemonData: Pokemon = await pokemonDataResponse.json()
                // console.log(pokemonData)
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    types: pokemonData.types,
                    image: pokemonData.sprites.other['official-artwork'].front_default
                }
            })
        )
        return {pokemonData, count, prevOffset: pageParam};
    }
    catch(error){
        console.error(error);
    }
}

export default fetchInfinitePokemon;