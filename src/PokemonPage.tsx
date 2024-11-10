import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import fetchSinglePokemon from "./assets/fetchSinglePokemon"
import MainInformationContainer from "./sub-components/MainInformationContainer"
import BasicPokemonStats from "./sub-components/BasicPokemonStats"

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
                <MainInformationContainer pokemon={data} />
                <BasicPokemonStats pokemon={data} />
            </div>
        )
    }
}
export default PokemonPage