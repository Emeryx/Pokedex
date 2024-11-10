interface EvolutionChain{
    chain: {
        species: { url: string; name: string  };
        evolves_to: Array < {
            species: { url: string; name: string  };
            evolves_to : Array < {
                species: { url: string; name: string };
            } >
        } >
    }
}

export default EvolutionChain;