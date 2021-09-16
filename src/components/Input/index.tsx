import React, { InputHTMLAttributes } from 'react'
import * as Styled from './styles'

export type InputProps = {
  type?: string
  onChange?: (value: string) => void
  placeHolder?: string
  value?: string
  disabled?: boolean
  reference?: HTMLInputElement
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  type,
  onChange,
  placeHolder,
  value,
  disabled = false,
  reference = null,
}: InputProps) => {
  const inputRef = React.useRef(reference)

  const handleChange = () => {
    const value = inputRef.current.value
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.WrapperInput>
        <Styled.Input
          ref={inputRef}
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={placeHolder}
          disabled={disabled}
        />
        <Styled.Icon icon={['fas', 'search']} />
      </Styled.WrapperInput>
    </Styled.Wrapper>
  )
}
