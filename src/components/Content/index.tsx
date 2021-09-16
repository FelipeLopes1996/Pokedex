import React from 'react'
import { TypeChildren } from '../../types/children'
import { Container } from './styles'

export const Content = ({ children }: TypeChildren) => {
  return <Container>{children}</Container>
}
