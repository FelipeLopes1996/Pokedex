/* eslint-disable no-unused-vars */
import React from 'react'
import { CardPokeProps } from '../../types/cardTypes'
import * as Styled from './styles'

type GridCardMap = {
  data?: CardPokeProps[]
  value?: string
  favorite?: boolean
  handleFaVorites?: (value: any) => void
  handleDelete?: (index: any) => void
}

export const CardPoke = ({
  favorite = false,
  value,
  data,
  handleFaVorites,
  handleDelete,
}: GridCardMap) => {
  const [checked, setCheckd] = React.useState([])
  const [favorites, setFavorites] = React.useState(favorite)

  const typeColors: any = {
    Fire: 'fire',
    Water: 'water',
    Grass: 'grass',
    Bug: 'bug',
    Poison: 'poison',
    Normal: 'normal',
    Flying: 'flying',
    Ice: 'ice',
    Ground: 'ground',
    Electric: 'electric',
    Psychic: 'psychic',
    Fairy: 'fairy',
    Dark: 'dark',
    Steel: 'steel',
    Dragon: 'dragon',
    Rock: 'rock',
    Ghost: 'ghost',
    Fighting: 'fighting',
  }

  const handleFavorite = (value: any) => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckd(newChecked)
    handleFaVorites(newChecked)
  }

  return (
    <>
      {data.map((dates, index) => (
        <Styled.Wrapper key={index}>
          <Styled.WrapperIcon>
            <Styled.Icon
              className={` ${
                checked.indexOf(dates) === -1 ? 'show' : 'invisible'
              }`}
              onClick={() => handleFavorite(dates)}
              icon={['far', 'heart']}
            />
            <Styled.Icon
              className={` ${
                checked.indexOf(dates) === -1 ? 'invisible' : 'fixed'
              }`}
              onClick={() => handleFavorite(dates)}
              icon={['fas', 'heart']}
            />
          </Styled.WrapperIcon>
          <Styled.WrapperImg>
            <img src={dates?.sprites?.normal} alt="pokemon" />
          </Styled.WrapperImg>
          <Styled.WrappeName>
            <span>{dates?.national_number}</span>
            <p>{dates?.name}</p>
          </Styled.WrappeName>
          <Styled.WrappeType>
            {dates.type.map((types: any, index) => (
              <p
                className={typeColors[types] ? typeColors[types] : ''}
                key={index}
              >
                {types}
              </p>
            ))}
          </Styled.WrappeType>
        </Styled.Wrapper>
      ))}
    </>
  )
}
