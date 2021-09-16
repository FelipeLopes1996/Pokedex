import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  /* position: absolute; */
  bottom: 5rem;
  left: 10rem;
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0);
`

export const Input = styled.input`
  ${() => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider} {
      background: ${props => props.theme.bg.secondary};
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${props => props.theme.bg.secondary};
    }
    &:checked + ${Slider}:before {
      transform: translateX(1.4rem);
      background: ${props => props.theme.bg.primary};
    }
  `}
`

export const Slider = styled.span`
  ${() => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.bg.dark};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    box-shadow: 0 0 1px ${props => props.theme.bg.info};
    &:before {
      content: '';
      position: absolute;
      height: 1.1rem;
      width: 1.1rem;
      right: 0;
      left: 0.2rem;
      bottom: 0.2rem;
      background: ${props => props.theme.bg.info};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`
