import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  @media (max-width: 1000px) {
    position: initial;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
`

export const Input = styled.input`
  ${() => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider} {
      background: ${props => props.theme.bg.danger};
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${props => props.theme.bg.default};
    }
    &:checked + ${Slider}:before {
      transform: translateX(1.4rem);
      background: ${props => props.theme.bg.default};
    }
  `}
`

export const Slider = styled.span`
  ${() => css`
    position: absolute;
    cursor: pointer;
    border: 1px solid #ccc;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.bg.default};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    box-shadow: 0 0 1px ${props => props.theme.bg.info};
    &:before {
      content: '';
      position: absolute;
      height: 1.1rem;
      width: 1.1rem;
      right: 0;
      left: 0.1rem;
      bottom: 0.1rem;
      background: ${props => props.theme.bg.danger};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`
