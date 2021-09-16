import React, { ReactNode, SelectHTMLAttributes } from 'react'
import * as Styled from './styles'
// import { TypeChildren } from '../../types/children'

type SelectProps = {
  children?: ReactNode
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
  reference?: HTMLSelectElement
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({
  children,
  value,
  onChange,
  reference = null,
  disabled = false,
}: SelectProps) => {
  const inputRef = React.useRef(reference)

  const handleChange = () => {
    const value = inputRef.current.value
    if (onChange) {
      onChange(value)
    }
  }
  return (
    <Styled.Wrapper
      ref={inputRef}
      disabled={disabled}
      onChange={handleChange}
      value={value}
    >
      {children}
    </Styled.Wrapper>
  )
}
