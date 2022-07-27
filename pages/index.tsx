import Head from 'next/head';
import {
  Container,
  Main,
} from '../components/sharedstyles';
import Cards from '../components/cards';
import { useEffect, useState } from 'react';
import Pokedex from '../components/pokedex';

export default function Home() {
  let [pokemons, setPokemons] = useState([])

  async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()
    for (let result of data.results) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
      const pokemonAll = await res.json()
      await setPokemons(currentList => [...currentList, pokemonAll])
    }
  }
  useEffect(() => { fetchData() }, [])

  return (
    <Container>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Pokedex>
          {pokemons.map((pokemon) => (
            <Cards
              key={pokemon.id}
              name={pokemon.name}
              number={pokemon.id}
              weight={pokemon.weight}
              type={pokemon.types[0].type.name}
              hp={pokemon.stats[0].base_stat}
              atk={pokemon.stats[1].base_stat}
              dfs={pokemon.stats[2].base_stat}
              satk={pokemon.stats[3].base_stat}
              sdfs={pokemon.stats[4].base_stat}
              spd={pokemon.stats[5].base_stat}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${pokemon.id}.png`}
              imagefull={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            />
          ))
          }
        </Pokedex>
      </Main>
    </Container>
  )
}
