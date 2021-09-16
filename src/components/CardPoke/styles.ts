import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    min-width: 0;
    word-wrap: break-word;
    width: 13.5rem;
    border-radius: 0.5rem;
    margin: 0 1rem 1rem;

    .show {
      visibility: hidden;
    }

    &:hover {
      .show {
        visibility: visible;
      }
    }

    .fixed:focus {
      display: inline-block;
    }
    .desfixed {
      display: none;
    }
    .invisible {
      display: none;
    }
  `}
`
export const WrapperIcon = styled.div`
  ${() => css`
    position: relative;
    left: 11rem;
    top: 2rem;
  `}
`

export const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.fg.danger};
  font-size: 1.4rem;
  cursor: pointer;
`

export const IconFix = styled(FontAwesomeIcon)`
  color: ${props => props.theme.fg.danger};
  font-size: 1.4rem;
  cursor: pointer;
`

export const WrapperImg = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    background: #cccccc47;
    border-radius: 9px;
    img {
      width: 100%;
      height: 13rem;
    }
  `}
`
export const WrappeName = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin: 0.7rem auto;

    span {
      color: #ccc;
      font-weight: 600;
    }
    p {
      color: ${props => props.theme.bg.secondary};
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 0.4rem;
    }
  `}
`
export const WrappeType = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    p {
      color: ${props => props.theme.bg.default};
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.5rem;
      border-radius: 0.5rem;
      margin-right: 0.6rem;
    }
    .poison {
      background: purple;
    }
    .grass {
      background: greenyellow;
      color: ${props => props.theme.bg.dark};
    }
    .bug {
      background: green;
    }
    .fire {
      background: ${props => props.theme.bg.danger};
    }
    .water {
      background: ${props => props.theme.bg.info};
    }
    .normal {
      background: ${props => props.theme.bg.success};
    }
    .flying {
      background: ${props => props.theme.bg.dark};
    }
    .ice {
      background: blue;
    }
    .electric {
      background: yellow;
      color: ${props => props.theme.bg.dark};
    }
    .ground {
      background: salmon;
    }
    .psychic {
      background: violet;
    }
    .fairy {
      background: pink;
    }
    .dark {
      background: ${props => props.theme.bg.dark};
      color: ${props => props.theme.bg.light};
    }
    .steel {
      background: #b8b8d0;
    }
    .dragon {
      background: ${props => props.theme.bg.danger};
    }
    .rock {
      background: #a68a6c;
    }
    .ghost {
      background: #ccc;
    }
    .fighting {
      background: #5edaf2;
      color: ${props => props.theme.bg.dark};
    }
  `}
`
