import * as Styled from './styles'
import React from 'react'

type SwitchTypes = {
  handleFaVoritesChange?: (value: any) => void
  favorite?: boolean
}

export const Switch = ({
  handleFaVoritesChange,
  favorite = false,
}: SwitchTypes) => {
  const [showFavorite, setShowFavorite] = React.useState(favorite)
  const handleChange = () => {
    handleFaVoritesChange(setShowFavorite(!showFavorite))
  }

  return (
    <Styled.Wrapper>
      <h1>Filtrar Favoritos</h1>
      <Styled.Label>
        <Styled.Input
          type="checkbox"
          value="favorite"
          onChange={handleChange}
          checked={favorite}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  )
}
