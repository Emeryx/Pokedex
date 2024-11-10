interface EvolutionChain{
    chain: {
        species: { url: string };
        evolves_to: Array < {
            species: { url: string };
            evolves_to : Array < {
                species: { url: string };
            } >
        } >
    }
}

export default EvolutionChain;