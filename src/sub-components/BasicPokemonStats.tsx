import PokemonContainerProps from "../assets/pokemonContainerProps";
import abbreviatedStats from "../assets/abbreviatedStats";

const BasicPokemonStats: React.FC<PokemonContainerProps> = ({pokemon: data}) => {
    return (
        <div className='bg-white shadow-lg sm:w-72 w-full size-fit flex flex-col gap-6 items-center justify-center p-8 rounded-lg'>
            <div className='flex flex-row flex-wrap gap-x-8 gap-y-4 justify-center items-center'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-2xl text-slate-800 text-center'>Height</p>
                    <p className='bg-gray-100 rounded-xl text-xl text-center'>{(data.height ?? 0) / 10}m</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-2xl text-slate-800 text-center'>Weight</p>
                    <p className='bg-gray-100 rounded-xl text-xl text-center'>{(data.weight ?? 0) / 10}kg</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-2xl text-slate-800 text-center'>Base EXP</p>
                    <p className='bg-gray-100 rounded-xl text-xl text-center'>{(data.base_experience ?? 'Unknown')}</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-2xl text-slate-800 text-center'>Catch Rate</p>
                    <p className='bg-gray-100 rounded-xl text-xl text-center'>{(data.capture_rate ?? 'Unknown')}</p>
                </div>
            </div>
            <p className='font-semibold text-2xl text-slate-800 text-center'>Stats</p>
            <div className='flex flex-row flex-wrap gap-x-8 gap-y-4 justify-center items-center'>
                {
                    data.stats && data.stats.map(stat => {
                        return (
                            <div key={data.name+'-'+stat.stat.name} className='flex flex-col gap-2 w-16'>
                                <p className='font-semibold text-2xl text-slate-800 text-center'>{abbreviatedStats[stat.stat.name]}</p>
                                <p className='bg-gray-100 rounded-xl text-xl text-center'>{(stat.base_stat ?? 'Unknown')}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasicPokemonStats