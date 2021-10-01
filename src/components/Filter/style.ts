import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 35%;

    h1 {
      color: ${props => props.theme.fg.dark};
      margin-bottom: 1rem;
    }

    .fixed {
      color: white;
      background: ${props => props.theme.bg.danger};
    }
    @media (max-width: 1000px) {
      width: 100%;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 4rem;
      }

      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `}
`
export const Button = styled.button`
  ${() => css`
    cursor: pointer;
    padding: 0.5rem 0;
    color: ${props => props.theme.fg.danger};
    font-size: 1.5rem;
    border: 2px solid ${props => props.theme.bg.danger};
    background: ${props => props.theme.bg.light};
    margin: 0.5rem 0.8rem 0.5rem 0rem;
    border-radius: 20px;
    width: 40%;
    transition: all 0.3s ease-out;

    @media (max-width: 1000px) {
      width: 30%;
      font-size: 2.5rem;
    }
  `}
`
