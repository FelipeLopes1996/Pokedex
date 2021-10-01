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

export const CardPoke = ({ data, handleFaVorites }: GridCardMap) => {
  const [checked, setCheckd] = React.useState([])
  const [show, setShow] = React.useState(12)

  const showMore = React.useCallback(
    total => {
      const show = data.filter((_, index) => index < total)
      return show
    },
    [data]
  )

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

  React.useEffect(() => {
    const showInitialLocalStorage = localStorage.setItem(
      'initialShow',
      String(12)
    )
    showInitialLocalStorage
    const dataInitialShow = parseFloat(localStorage.getItem('initialShow'))
    if (dataInitialShow) {
      setShow(dataInitialShow)
    }
  }, [data])

  return (
    <>
      {showMore(show)?.length &&
        showMore(show).map((dates, index) => (
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
      {data.length > showMore(show)?.length && (
        <Styled.WrapperShowMore>
          <button
            onClick={() => {
              setShow(preState => preState + 12)
            }}
          >
            + Ver Mais
          </button>
        </Styled.WrapperShowMore>
      )}
    </>
  )
}
