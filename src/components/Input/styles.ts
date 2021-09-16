import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  ${() => css`
    width: 45%;
  `}
`

export const WrapperInput = styled.div`
  ${() => css`
    position: relative;

    > svg {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      color: #ccc;
      z-index: 99;
      color: ${props => props.theme.bg.danger};
    }
    /* *:focus ~ svg {
      color: $ {props => props.theme.bg.danger};
    } */
  `}
`
export const Input = styled.input`
  ${() => css`
    border: 1px solid #ccc;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    padding: 1rem;
    background: ${props => props.theme.bg.light};
    padding-right: 3.7rem;
    border-radius: 1rem;
    outline: none;
    &::placeholder {
      font-size: 1.2rem;
      font-weight: 600;
      opacity: 0.6;
    }
    &:focus {
      border: 0.2rem solid ${props => props.theme.bg.danger};
      box-shadow: 0 0 ${props => props.theme.bg.danger} 0
        ${props => props.theme.bg.primary};
      background: ${props => props.theme.bg.light};
    }
  `}
`
export const Icon = styled(FontAwesomeIcon)`
  /* font-size: 1rem;
  $ {props => props.theme.bg.danger}
  z-index: 100; */
`
