import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 104px;
  margin-top: 3rem;
`

const Card = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
  border: 1px solid #74CB48;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 104px;
  height: 112px;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
    cursor: pointer;
  }
`

const Name = styled.div`
  background: #74CB48;
  font-size: 1rem;
  color: #fff;
  width: 100%;
  padding-left:18%; 
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const Number = styled.div`
  color: #74CB48;
  font-size: 0.9rem;
`


export default function Cards() {
  return (
    <FlexContainer>
      <Card>
        <Number>
          #001
        </Number>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png`} />
        <Name>Bulbasaur</Name>
      </Card>
    </FlexContainer>
  )
}
