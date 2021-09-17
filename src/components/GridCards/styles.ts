import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    width: 80%;
    max-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
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

    @media (max-width: 568px) {
      height: 60vh;
    }
  `}
`
