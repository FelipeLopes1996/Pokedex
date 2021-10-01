import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css`
    display: flex;
    margin: 1rem 10rem 0;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  `}
`
