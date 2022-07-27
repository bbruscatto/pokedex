import { useState } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
`
const Number = styled.div`
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Cards(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <FlexContainer>
      <Card onClick={handleOpen} style={{ border: `1px solid ${typeColors(`${props.type}`)}` }}>
        <Number style={{ color: typeColors(`${props.type}`) }} >
          {props.number > 99 ? `#${props.number}` : props.number > 9 ? `#0${props.number}` : `#00${props.number}`}
        </Number>
        <Image src={props.image} />
        <Title style={{ background: typeColors(`${props.type}`) }}><Name>{props.name}</Name></Title>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Image src={props.imagefull} />
            {props.weight} <br />
            {props.hp} <br />
            {props.atk} <br />
            {props.dfs} <br />
            {props.satk} <br />
            {props.sdfs} <br />
            {props.spd} <br />
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </FlexContainer>
  )
}
