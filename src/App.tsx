import PokemonContainer from './PokemonContainer'
function App() {
  return <div className='bg-gray-100 h-screen w-screen'>
      <PokemonContainer id={157} name='Typhlosion' type={['Fire']} image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png' />
  </div>
}

export default App
