import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  min-width: 104px;
  margin-top: 3rem;
`

const Card = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-color: #fff;
  border: 1px solid #74CB48;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  height: 112px;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
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
`

const Image = styled.img`
 margin: 0 auto;
 max-width: 4.5rem;
 max-height: 4.5rem;
`


export default function Cards(props) {
  return (
    <FlexContainer>
      <Card>
        <Number>
          {props.number}
        </Number>
        <Image src={props.image} />
        <Title><Name>{props.name}</Name></Title>
      </Card>
    </FlexContainer>
  )
}
