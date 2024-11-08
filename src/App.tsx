import { useInfiniteQuery } from '@tanstack/react-query';
import PokemonContainer from './PokemonContainer'
import fetchInfinitePokemon from './fetchInfinitePokemon';
import React, { useEffect } from 'react';
import Pokemon from './Pokemon.interface';
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

  useEffect(()=>console.log(data?.pages.length))

  if(isFetching && !data){
    return <p>Loading</p>
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
    <div className='bg-gray-100 h-full w-full flex flex-row flex-wrap gap-16 p-32 items-center justify-center'>
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
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>More</button>
    </div>
    </InfiniteScroll>
  )
}

export default App
