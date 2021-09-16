import styled, { css } from 'styled-components'

export const Wrapper = styled.select`
  ${() => css`
    border: 1px solid #ccc;
    width: 35%;
    height: 100%;
    font-size: 1rem;
    padding: 1rem;
    background: ${props => props.theme.bg.light};
    padding-right: 3.7rem;
    border-radius: 1rem;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    &:focus {
      border: 0.2rem solid ${props => props.theme.bg.danger};
      box-shadow: 0 0 ${props => props.theme.bg.danger} 0
        ${props => props.theme.bg.primary};
      background: ${props => props.theme.bg.light};
    }
  `}
`
