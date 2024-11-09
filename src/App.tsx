import { useInfiniteQuery } from '@tanstack/react-query';
import PokemonContainer from './sub-components/PokemonContainer'
import fetchInfinitePokemon from './assets/fetchInfinitePokemon';
import React from 'react';
import Pokemon from './assets/Pokemon.interface';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    error,
    isFetching
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: fetchInfinitePokemon,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage) return undefined;
      else if(lastPage.prevOffset + 20 > lastPage?.count) return undefined;
      return lastPage.prevOffset + 20
    }
  })

  // useEffect(()=>console.log(data?.pages.length))

  if(isFetching && !data){
    return (
    <div className='bg-gray-100 h-full w-full flex flex-row flex-wrap gap-16 p-32 items-center justify-center'>
      <p className='text-3xl'>Loading...</p>
    </div>
  )
  }
  else if (error){
    return <p>{error.message}</p>
  }
  else return (
    <InfiniteScroll
      dataLength={data?.pages.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<p>Loading...</p>}>
      <div className='bg-gray-100 h-full w-full flex flex-row flex-wrap gap-16 md:p-32 p-16 items-center justify-center'>
        {
          data?.pages.map((group, i) => 
            <React.Fragment key={i}>
              {
                group?.pokemonData.map((pokemon: Pokemon) => 
                  <PokemonContainer key={'pokemon-'+pokemon.id} pokemon={pokemon} />
                )
              }
            </React.Fragment>
          )
        }
      </div>
    </InfiniteScroll>
  )
}

export default App
