import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    width: 100%;
    margin-top: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`
