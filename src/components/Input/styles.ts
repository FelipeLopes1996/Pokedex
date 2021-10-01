import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  ${() => css`
    width: 45%;
    @media (max-width: 1000px) {
      width: 100%;
      margin-bottom: 2rem;
    }
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
  `}
`
export const Input = styled.input`
  ${() => css`
    border: 1px solid #ccc;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: ${props => props.theme.bg.light};
    padding-right: 3.7rem;
    border-radius: 1rem;
    outline: none;
    transition: all 0.2s ease-out;
    &::placeholder {
      font-size: 1.2rem;
      font-weight: 600;
      opacity: 0.6;
    }
    &:focus {
      border: 0.15rem solid ${props => props.theme.bg.danger};
      box-shadow: 0 0 ${props => props.theme.bg.danger} 0
        ${props => props.theme.bg.primary};
      background: ${props => props.theme.bg.light};
    }

    @media (max-width: 1000px) {
      width: 100%;
      padding: 2rem;

      ::-webkit-input-placeholder {
        font-size: 2rem;
      }
    }
  `}
`
export const Icon = styled(FontAwesomeIcon)`
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
`
