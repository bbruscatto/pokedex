import styled from 'styled-components'
import pokeball from '../public/Pokeball.png'
import "@fontsource/poppins";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-width: 104px;
  margin: 20rem 0;
  padding: 20rem 0;
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
  height: 3rem;
  margin: 0.5rem 0;
`
const MadeBy = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0.3rem 0;
  font-family: 'Poppins';
  font-size: 0.9rem;
  font-weight: 800;
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
  flex-wrap: wrap;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar { 
    width: 0;
    height: 0;
}
`

const Searchbox = styled.input`
 font-family: 'Poppins';
margin: 0 auto;
margin-bottom: 1rem;  
line-height: 2rem;
color: #212121;
display: flex;
flex-direction: row;
align-items: flex-start;
width: 20.5rem;
height: 1.5rem;
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 8px;
text-align: center;
::placeholder {
   text-align: center; 
}
`

export default function Pokedex(props) {
  return (
    <FlexContainer>
      <PokedexMain>
        <PokedexTitle>
          <Image src={pokeball.src} />
          <Title>Pokédex</Title>
        </PokedexTitle>
        <Searchbox
          type="search"
          placeholder="Search"
          onChange={props.onChange}
          value={props.value}
        />
        <Pokemons>{props.children}</Pokemons>
        <MadeBy>Made by Brunno Bruscatto</MadeBy>
      </PokedexMain>
    </FlexContainer>
  )
}
