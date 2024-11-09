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
        const pokedexData: {capture_rate: number, gender_rate: number, flavor_text_entries: Array<{flavor_text: string, language: {name: string}}>, genera: Array<{genus: string, language: {name: string}}>} = await pokedexEntryResponse.json();
        const {base_experience, height, weight, id, types, sprites, stats} = pokemonData;
        const { flavor_text_entries, genera, gender_rate, capture_rate } = pokedexData;
        return {flavor_text_entries, genera, gender_rate, capture_rate, base_experience, height, weight, id, types, sprites, stats, name: pokemonData.name};
    }
    catch(error){
        console.error(error);
    }
}

export default fetchSinglePokemon;