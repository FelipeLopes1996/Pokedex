import React from 'react'
import * as Styled from './styles'

export const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperNav>
        <div>
          <Styled.Icon icon={['far', 'dot-circle']} />
          <h1>Pokédex</h1>
        </div>
        <div>
          <Styled.IconRow icon={['fas', 'location-arrow']} />
          <Styled.IconExit icon={['fas', 'sign-out-alt']} />
        </div>
      </Styled.WrapperNav>
    </Styled.Wrapper>
  )
}
