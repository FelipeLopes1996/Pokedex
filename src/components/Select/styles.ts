import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    @media (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`

export const Select = styled.select`
  ${() => css`
    border: 1px solid #ccc;
    width: 35%;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem;
    margin-left: 1rem;
    background: ${props => props.theme.bg.light};
    padding-right: 3.7rem;
    border-radius: 1rem;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    transition: all 0.2s ease-out;
    &:focus {
      border: 0.15rem solid ${props => props.theme.bg.danger};
      box-shadow: 0 0 ${props => props.theme.bg.danger} 0
        ${props => props.theme.bg.primary};
      background: ${props => props.theme.bg.light};
    }
    @media (max-width: 1000px) {
      width: 45.5%;
      margin: 0;
    }
  `}
`
export const Span = styled.span`
  ${() => css`
    font-weight: 600;
    font-size: 1.8rem;
  `}
`
