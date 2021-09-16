import React from 'react'
import { TypeChildren } from '../../types/children'
import * as Styled from './styles'

export const GridCard = ({ children }: TypeChildren) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}
