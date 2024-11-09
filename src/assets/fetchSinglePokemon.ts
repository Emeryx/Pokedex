import { QueryFunctionContext } from "@tanstack/react-query";
import Pokemon from "./Pokemon.interface";

const fetchSinglePokemon = async ({ queryKey }: QueryFunctionContext<[string, string]>) => {
    try{
        const name = queryKey[1];
        const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokedexEntryResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        if(!pokemonDataResponse.ok || !pokedexEntryResponse.ok){
            throw new Error(`Response status: ${pokemonDataResponse.status || pokedexEntryResponse.status}`)
        }
        const pokemonData: Pokemon = await pokemonDataResponse.json();
        const pokedexData: {flavor_text_entries: Array<{flavor_text: string}>, genera: Array<{genus: string, language: {name: string}}>} = await pokedexEntryResponse.json();
        const {base_experience, height, weight, id, types, sprites, stats} = pokemonData;
        const { flavor_text_entries, genera } = pokedexData;
        return {flavor_text_entries, genera, base_experience, height, weight, id, types, sprites, stats, name};
    }
    catch(error){
        console.error(error);
    }
}

export default fetchSinglePokemon;