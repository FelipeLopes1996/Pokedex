import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
      color: ${props => props.theme.fg.dark};
      margin-bottom: 0.6rem;
    }

    .fixed {
      color: white;
      background: ${props => props.theme.bg.danger};
    }
  `}
`
export const Button = styled.button`
  ${() => css`
    cursor: pointer;
    padding: 0.5rem 0;
    color: ${props => props.theme.fg.danger};
    font-size: 1rem;
    border: 2px solid ${props => props.theme.bg.danger};
    background: ${props => props.theme.bg.light};
    margin: 0.5rem 0.8rem 0.5rem 0rem;
    border-radius: 20px;
    width: 40%;
  `}
`
