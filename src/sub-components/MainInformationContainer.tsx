/* eslint-disable no-control-regex */
import PokemonContainerProps from "../assets/pokemonContainerProps"
import snakeToTitleCase from "../assets/snakeToTitleCase"
import typeColors from "../assets/typeColors";

const MainInformationContainer: React.FC<PokemonContainerProps> = ({pokemon: data}) => {
    return (
        <div className='bg-white shadow-lg size-fit flex flex-col gap-4 items-center justify-center p-8 rounded-lg'>
            <img className='size-96' src={data.sprites.other["official-artwork"].front_default} />
            <p className='font-bold text-xl text-slate-500'>#{data.id}</p>
            <p className='font-bold text-4xl text-slate-800'>{snakeToTitleCase(data.name)}</p>
            <p className='font-semibold text-2xl text-slate-600'>{data.genera && data.genera.find(g => g.language.name == 'en')?.genus || ''}</p>
            <div className='flex flex-row gap-x-4 justify-center items-center'>
                {
                    data.types.map((t, i) => <p key={i} className={(typeColors[t.type.name] || 'bg-gray-800 text-white')+' w-fit py-2 px-4 font-medium text-xl rounded-3xl'}>{t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}</p>)
                }
                {
                    (data.gender_rate && data.gender_rate >=1 && data.gender_rate <= 5) ? <> <img className='size-8' src='https://www.svgrepo.com/show/512452/male-1364.svg' /> <img className='size-8' src='https://www.svgrepo.com/show/512122/female-1363.svg' /> </> : null
                }
                {
                    (data.gender_rate == 6) ? <img className='size-8' src='https://www.svgrepo.com/show/512122/female-1363.svg' /> : null
                }
                {
                    (data.gender_rate == 7) ? <img className='size-8' src='https://www.svgrepo.com/show/512452/male-1364.svg' /> : null
                }
            </div>
            <p className='text-xl text-slate-800 w-96 text-center'>{data.flavor_text_entries?.find(entry => entry?.language?.name == 'en')
            ?.flavor_text.split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ').replace(/\u000C/g, '') || 'No description available'}</p>
        </div>
    )
}

export default MainInformationContainer;