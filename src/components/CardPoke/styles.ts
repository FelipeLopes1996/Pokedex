import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  ${() => css`
    width: 10.5rem;
    border-radius: 0.5rem;
    margin: 0 1rem 1rem;

    &:hover {
      .show {
        visibility: visible;
      }
    }

    .fixed:focus {
      visibility: visible;
    }
    .desfixed {
      visibility: hidden;
    }
  `}
`
export const WrapperIcon = styled.div`
  ${() => css`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: end;
    cursor: pointer;
    top: 1.7rem;
    right: 0.5rem;
  `}
`

export const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.fg.danger};
  font-size: 1.4rem;
`

export const WrapperImg = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    background: #cccccc47;
    border-radius: 9px;
    img {
      width: 100%;
      height: 9rem;
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
