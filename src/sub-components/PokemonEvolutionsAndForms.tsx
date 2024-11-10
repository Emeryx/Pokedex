import PokemonContainerProps from "../assets/pokemonContainerProps";
import fetchPokemonImageAndId from "../assets/fetchPokemonImageAndId";

const PokemonEvolutionsAndForms: React.FC<PokemonContainerProps> = ({pokemon: data}) => {

    // [ {url: string, name: string}, ... ]
    const basicForm: {url: string, name: string} | undefined = data.evolution_chain?.chain.species;
    const middleForms: Array<{url: string, name: string} | null> | undefined = data.evolution_chain?.chain.evolves_to.map(species => species.species);
    const finalForms: Array<{url: string, name: string} | null> | undefined = data.evolution_chain?.chain.evolves_to.flatMap(species => species.evolves_to.flatMap(species => species ? species.species : null));

    console.log('Basic Form')
    console.log(basicForm)
    console.log('Middle Form/s')
    console.log(middleForms)
    console.log('Final Form/s')
    console.log(finalForms)

    return (
        // ! Remove opacity-0 when you're back on working on it
        <div className='opacity-0 bg-white shadow-lg size-fit flex flex-col w-128 gap-4 items-center justify-center p-8 rounded-lg'>
            
        </div>
    )
}

export default PokemonEvolutionsAndForms;