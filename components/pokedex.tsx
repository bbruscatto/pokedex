import styled from 'styled-components'
import pokeball from '../public/Pokeball.png'
import Grid from '@mui/material/Grid';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-width: 104px;
  margin-top: 3rem;
`

const PokedexMain = styled.div`
display: flex;
flex-direction: column;
background: #F7F7F7;
border-radius: 12px;
width: 360px;
height: 640px;
`

const PokedexTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Image = styled.img`
 width: 32px;
 height: 32px;
  margin: 1rem;
`
const Title = styled.h1`
 font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 2rem;
line-height: 2rem;
color: #212121;
`

const Pokemons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0 1rem;
`

export default function Pokedex(props) {
  return (
    <FlexContainer>
      <PokedexMain>
        <PokedexTitle>
          <Image src={pokeball.src} />
          <Title>Pokédex</Title>
        </PokedexTitle>
        <Pokemons>{props.children}</Pokemons>
      </PokedexMain>
    </FlexContainer>
  )
}
