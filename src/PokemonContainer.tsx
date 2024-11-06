import typeColors from "./assets/typeColors";

interface Pokemon {
    id: number;
    name: string;
    type: string[];
    image: string;
}

const PokemonContainer: React.FC<Pokemon> = ({ id, name, type, image }) => {
    return (<div className='mt-64 bg-white w-fit h-80 rounded-3xl space-y-3 flex flex-col justify-end items-center p-8 shadow-lg'>
            <img className='size-64' src={image}></img>
            <p className='font-bold text-xl text-slate-500'>#{id}</p>
            <p className='font-bold text-3xl text-slate-900'>{name}</p>
            <div className='flex flex-row gap-x-3'>
                {
                    type.map((t, i) => <p key={i} className={(typeColors[t] || 'bg-gray-800 text-white')+' w-fit py-2 px-4 font-medium text-xl rounded-3xl'}>{t}</p>)
                }
            </div>
        </div>)
}

export default PokemonContainer;