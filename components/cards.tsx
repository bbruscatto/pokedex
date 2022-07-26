import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-width: 104px;
  margin-top: 0.2rem;
`

const Card = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-color: #fff;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
width: 100%;
height: 112px;

  &:hover,
  :focus,
  :active {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Title = styled.div`
  background: #74CB48;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
`
const Number = styled.div`
  color: #74CB48;
  font-size: 0.9rem;
  margin: 0 auto;
`

const Name = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 0 auto;
  ::first-letter {
    text-transform:capitalize;
}
`

const Image = styled.img`
 margin: 0 auto;
 max-width: 4rem;
 max-height: 4rem;
`
const typeColors = (type) => {
  var colors = {
    grass: '#74CB48',
    water: '#6493EB',
    rock: '#B69E31',
    ghost: '#70559B',
    normal: '#AAA67F',
    fighting: '#C12239',
    psychic: '#FB5584',
    ground: '#DEC16B',
    bug: '#A7B723',
    ice: '#9AD6DF',
    fire: '#F57D31',
    dark: '#75574C',
    electric: '#F9CF30',
    dragon: '#7037FF',
    fairy: '#E69EAC',
    steel: '#B7B9D0',
    flying: '#A891EC',
    poison: '#A43E9E'
  }
  return colors[type]
}

export default function Cards(props) {
  return (
    <FlexContainer>
      <Card style={{ border: `1px solid ${typeColors(`${props.type}`)}` }}>
        <Number style={{ color: typeColors(`${props.type}`) }} >
          {props.number > 99 ? `#${props.number}` : props.number > 9 ? `#0${props.number}` : `#00${props.number}`}
        </Number>
        <Image src={props.image} />
        <Title style={{ background: typeColors(`${props.type}`) }}><Name>{props.name}</Name></Title>
      </Card>
    </FlexContainer>
  )
}
