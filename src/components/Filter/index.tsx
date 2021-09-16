/* eslint-disable no-unused-vars */
/* eslint-disable no-labels */
import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import * as Styled from './style'

import mockTypes from '../../utils/mockTypes'

type ButtonTypes = {
  onClick?: () => void
  value?: string
  name?: string
  active?: boolean
  handleFilters?: (value: any) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

type Input = {
  onClick?: () => void
  value?: string
  name?: string
  active?: boolean
  handleFilters?: (value: any) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Filter = ({ active = false, handleFilters }: Input) => {
  const [checked, setCheckd] = React.useState([])

  const handleClick = (value: any) => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckd(newChecked)
    handleFilters(newChecked)
  }

  return (
    <Styled.Wrapper>
      <h1>Filtrar por tipo</h1>
      <div>
        {mockTypes.map((value: any) => (
          <Styled.Button
            type="button"
            className={`${
              checked.indexOf(value.name) !== -1 ? 'fixed' : false
            }`}
            key={value.id}
            onClick={() => handleClick(value.name)}
          >
            {value.name}
          </Styled.Button>
        ))}
      </div>
    </Styled.Wrapper>
  )
}
