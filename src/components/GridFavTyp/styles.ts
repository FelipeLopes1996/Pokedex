import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css`
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 5rem;

    ::-webkit-scrollbar {
      width: 12px;
      height: 200px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      height: 200px;
      border: 3px solid #ffffff;
      background-color: #e2350d;
    }
  `}
`
