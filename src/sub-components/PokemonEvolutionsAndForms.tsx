import PokemonContainerProps from "../assets/pokemonContainerProps";

const PokemonEvolutionsAndForms: React.FC<PokemonContainerProps> = ({pokemon: data}) => {

    return (
        <div className='bg-white shadow-lg size-fit flex flex-col gap-4 items-center justify-center p-8 rounded-lg'>
            <p>
                I can involve! <br/>
                <b>From:</b> {data.evolution_chain?.chain.species.url} <br />
                <b>To:</b> {data.evolution_chain?.chain.evolves_to.map(species => <span key={species.species.url}>{species.species.url}<br/></span>)}
                <b>And finally to:</b> {data.evolution_chain?.chain.evolves_to.map(species => species.evolves_to.map(species => <span key={species.species.url}>{species.species.url}<br/></span>))} 
            </p>
        </div>
    )
}

export default PokemonEvolutionsAndForms;