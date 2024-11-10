import EvolutionChain from "./EvolutionChain.interface";

const fetchEvolutionChain = async (pokedexData: { evolution_chain: { url: string } }) => {
    try{
        const response = await fetch(pokedexData.evolution_chain.url)
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const evolutionChain: EvolutionChain = await response.json();

        if(!evolutionChain.chain.evolves_to[0]){
            return undefined
        }
        else{
            return evolutionChain
        }
    }
    catch(error){
        console.error(error)
    }
}

export default fetchEvolutionChain;