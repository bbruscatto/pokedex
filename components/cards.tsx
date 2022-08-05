import { useState } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import "@fontsource/poppins";
import { FiArrowLeft } from "react-icons/fi";
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
const ModalTitle = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    color: #fff;
    line-height: 32px;
  };
 
`
const Number = styled.div`
  font-size: 0.9rem;
  margin: 0 auto;
`
const SkillBox = styled.div`
  background: #262626;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius : 1rem;
  width: 100%;
  align-items: center;
`
const SkillLevel = styled.div`
  height: 10px;
  background: #1d76db;
  border-radius : 1rem;
  width: 100%;
  align-items: center;
`
const Skill = styled.div`
  height: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`
const SkillType = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Poppins';
font-style: normal;
`
const Stats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Attributes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Poppins';
  font-size: 0.9rem;
`
const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2{
    font-size: 1.3rem;
    font-family: 'Poppins';
    font-weight: 700;
  };

`

const Name = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 0 auto;
  ::first-letter {
    text-transform:capitalize;
}
`
const Type = styled.p`
  border-radius: 10px;
  padding: 2px 8px;
  font-family: 'Poppins';
  font-weight: 700;
  color: #fff;
  font-size: 1rem;
  margin: 1 auto;
  ::first-letter {
    text-transform:capitalize;
}
`
const ModalName = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  ::first-letter {
    text-transform:capitalize;
}
`
const Image = styled.img`
 margin: 0 auto;
 max-width: 4rem;
 max-height: 4rem;
`
const ImageModal = styled.img`
 margin: 0 auto;
 max-width: 8rem;
 max-height: 8rem;
`

const ButtonBack = styled.button`
background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  color: #fff;
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
  width: '20rem',
  bgcolor: 'background.paper',
  borderRadius: '10%',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ border: `2px solid ${typeColors(`${props.type}`)}`, background: `${typeColors(`${props.type}`)}` }}>
          <ModalTitle >
            <ButtonBack onClick={handleClose} type="button">
              <FiArrowLeft style={{ width: '2rem', height: '1.5rem' }} />
            </ButtonBack>
            <ModalName> {props.name}  </ModalName>
            <p>{props.number > 99 ? `#${props.number}` : props.number > 9 ? `#0${props.number}` : `#00${props.number}`}</p>
          </ModalTitle>
          <ModalTitle>
            <ImageModal src={props.imagefull} /> </ModalTitle>
          <div style={{ background: 'white', borderRadius: '15px', width: '18rem', padding: '0.2rem 1.2rem' }}>
            <Info>
              <Type style={{ background: `${typeColors(`${props.type}`)}` }}>
                {props.type}
              </Type>
              <Attributes>
                <FaWeight style={{ color: 'gray' }} />  {(props.weight * 0.1).toFixed(1)}kg
                <span style={{ margin: '0 1rem' }}>|</span>
                <GiBodyHeight style={{ color: 'gray' }} /> {(props.height * 0.1).toFixed(1)} m
              </Attributes>
              <h2 style={{ color: `${typeColors(`${props.type}`)}` }}> Base Stats</h2>
            </Info>
            <Stats>
              <Skill><SkillType>HP {props.hp > 99 ? props.hp : `0${props.hp}`}</SkillType>  <SkillBox><SkillLevel style={{ width: `${props.hp / 1.8}%`, background: `${typeColors(`${props.type}`)}` }} /> </SkillBox> </Skill>
              <Skill><SkillType> ATK {props.atk > 99 ? props.atk : `0${props.atk}`}</SkillType> <SkillBox><SkillLevel style={{ width: `${props.atk / 1.8}%`, background: `${typeColors(`${props.type}`)}` }} /> </SkillBox></Skill>
              <Skill><SkillType> DEF {props.dfs > 99 ? props.dfs : `0${props.dfs}`}</SkillType> <SkillBox><SkillLevel style={{ width: `${props.dfs / 1.8}%`, background: `${typeColors(`${props.type}`)}` }} /> </SkillBox></Skill>
              <Skill><SkillType> SPD {props.spd > 99 ? props.spd : `0${props.spd}`}</SkillType> <SkillBox><SkillLevel style={{ width: `${props.spd / 1.8}%`, background: `${typeColors(`${props.type}`)}` }} /> </SkillBox></Skill>
              <Skill><SkillType> SATK {props.satk > 99 ? props.satk : `0${props.satk}`}</SkillType> <SkillBox><SkillLevel style={{ width: `${props.satk / 1.8}%`, background: `${typeColors(`${props.type}`)}` }} /> </SkillBox></Skill>
              <Skill><SkillType> SDEF {props.sdfs > 99 ? props.sdfs : `0${props.sdfs}`}</SkillType> <SkillBox><SkillLevel style={{ width: `${props.sdfs / 1.8}%`, background: `${typeColors(`${props.type}`)}` }} /> </SkillBox></Skill>
            </Stats>
          </div>
        </Box>
      </Modal>
    </FlexContainer >
  )
}
