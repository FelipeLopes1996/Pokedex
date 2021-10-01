import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  ${() => css`
    background: #dc3545;
    padding: 1rem 10rem;
  `}
`

export const WrapperNav = styled.nav`
  ${() => css`
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      h1 {
        font-size: 1.7rem;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        color: ${props => props.theme.bg.light};
      }
    }
    @media (max-width: 1000px) {
      /* justify-content: center; */

      div {
        justify-content: space-between;
        h1 {
          font-size: 5rem;
          margin-right: 5rem;
        }
      }
    }
  `}
`

export const Icon = styled(FontAwesomeIcon)`
  ${() => css`
    font-size: 3rem;
    color: ${props => props.theme.bg.light};
    background: ${props => props.theme.bg.danger};
    @media (max-width: 1000px) {
      font-size: 4rem;
    }
  `}
`
export const IconExit = styled(FontAwesomeIcon)`
  ${() => css`
    font-size: 1rem;
    color: ${props => props.theme.bg.light};
    background: ${props => props.theme.bg.danger};

    @media (max-width: 1000px) {
      font-size: 4rem;
    }
  `}
`
export const IconRow = styled(FontAwesomeIcon)`
  ${() => css`
    font-size: 2rem;
    margin-right: 1rem;
    color: ${props => props.theme.bg.light};
    background: ${props => props.theme.bg.danger};
    @media (max-width: 1000px) {
      font-size: 4rem;
    }
  `}
`
