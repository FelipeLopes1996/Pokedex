import React from 'react'
import { TypeChildren } from '../../types/children'
import { Container } from './styles'

export const Main = ({ children }: TypeChildren) => {
  return <Container>{children}</Container>
}
