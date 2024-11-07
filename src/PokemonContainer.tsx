import typeColors from "./assets/typeColors";
import Pokemon from "./Pokemon.interface";

interface PokemonContainerProps{
    pokemon: Pokemon
}

const PokemonContainer: React.FC<PokemonContainerProps> = ({ pokemon }) => {
    return (<div className='mt-64 bg-white w-fit h-80 rounded-3xl space-y-3 flex flex-col justify-end items-center p-8 shadow-lg'>
            <img className='size-64' src={pokemon.image}></img>
            <p className='font-bold text-xl text-slate-500'>#{pokemon.id}</p>
            <p className='font-bold text-3xl text-slate-900'>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</p>
            <div className='flex flex-row gap-x-3'>
                {
                    pokemon.types.map((t, i) => <p key={i} className={(typeColors[t.type.name] || 'bg-gray-800 text-white')+' w-fit py-2 px-4 font-medium text-xl rounded-3xl'}>{t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}</p>)
                }
            </div>
        </div>)
}

export default PokemonContainer;