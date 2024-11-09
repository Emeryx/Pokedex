/* eslint-disable no-control-regex */
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import fetchSinglePokemon from "./assets/fetchSinglePokemon"
import snakeToTitleCase from "./assets/snakeToTitleCase"
import typeColors from "./assets/typeColors"

const PokemonPage = () => {

    const { name } = useParams<{ name: string }>()
    const {isFetching, error, data} = useQuery({
        queryKey: ['pokemon', name ?? 'nonexistentPokemon'],
        queryFn: fetchSinglePokemon,

    })
    const navigate = useNavigate()
    
    if(isFetching && !data){
        return (
            <div className='bg-gray-100 h-full w-full flex flex-row flex-wrap gap-16 p-32 items-center justify-center'>
                <p className='text-3xl font-semibold'>Loading...</p>
            </div>
        )
    }
    else if(error){
        return (
            <div className='bg-gray-100 h-full w-full flex flex-col flex-wrap gap-8 md:p-32 p-4 py-32 items-center justify-center'>
                <p className='text-3xl font-semibold'>Pokemon not found</p>
                <p className='text-xl text-center'>Perhaps it's hiding under a disguise, Just like Mimikyuu does...</p>
                <img className='w-auto h-64 shadow-lg rounded-md' src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/pokemon-mimikyu-1.jpg' />
                <button onClick={() => navigate('/')} className='bg-purple-900 text-white font-semibold shadow-xl'>Go back</button>
            </div>
      )
    }
    else if(data){
        // return <p>Base EXP: {data.base_experience} Height: {(data.height ?? 0) / 10} m, Weight: {(data.weight ?? 0) / 10} kg {data.flavor_text_entries[0].flavor_text.split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ').replace(/\u000C/g, '')}</p>
        return(
            <div className='bg-gray-100 h-full w-full flex flex-row flex-wrap gap-8 p-16 items-center justify-center'>
                <div className='bg-white shadow-lg size-fit flex flex-col gap-4 items-center justify-center p-8 rounded-lg'>
                    <img className='size-96' src={data.sprites.other["official-artwork"].front_default} />
                    <p className='font-bold text-xl text-slate-500'>#{data.id}</p>
                    <p className='font-bold text-4xl text-slate-800'>{snakeToTitleCase(data.name)}</p>
                    <p className='font-semibold text-2xl text-slate-600'>{data.genera.find(g => g.language.name == 'en')?.genus || ''}</p>
                    <div className='flex flex-row gap-x-4 justify-center items-center'>
                        {
                            data.types.map((t, i) => <p key={i} className={(typeColors[t.type.name] || 'bg-gray-800 text-white')+' w-fit py-2 px-4 font-medium text-xl rounded-3xl'}>{t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}</p>)
                        }
                        {
                            (data.gender_rate >=1 && data.gender_rate <= 5) ? <> <img className='size-8' src='https://www.svgrepo.com/show/512452/male-1364.svg' /> <img className='size-8' src='https://www.svgrepo.com/show/512122/female-1363.svg' /> </> : null
                        }
                        {
                            (data.gender_rate == 6) ? <img className='size-8' src='https://www.svgrepo.com/show/512122/female-1363.svg' /> : null
                        }
                        {
                            (data.gender_rate == 7) ? <img className='size-8' src='https://www.svgrepo.com/show/512452/male-1364.svg' /> : null
                        }
                    </div>
                    <p className='text-xl text-slate-800 w-64 text-center'>{data.flavor_text_entries?.find(entry => entry?.language?.name == 'en')
                    ?.flavor_text.split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ').replace(/\u000C/g, '') || 'No description available'}</p>
                </div>
                <div className='bg-white shadow-lg size-fit flex flex-col gap-4 items-center justify-center p-8 rounded-lg'>
                        <div className='flex flex-row flex-wrap w-64 gap-x-16 gap-y-8 justify-center items-center'>
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
                        </div>
                </div>
            </div>
        )
    }
}
export default PokemonPage