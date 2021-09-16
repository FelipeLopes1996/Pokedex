import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${() => css`
    display: flex;
    margin: 1rem 10rem 0;
    overflow-y: auto;
    height: 67vh;

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
