import { useParams } from "react-router-dom"

const PokemonPage = () => {
    const { name } = useParams<{ name: string }>()
    return <p>{name}</p>
}
export default PokemonPage