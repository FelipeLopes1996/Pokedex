import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  a,
  button {
    &,
    &:focus,
    &:active {
      outline: none;
    }
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.fg.dark};
  }
  body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.bg.light};
    color: ${props => props.theme.fg.dark};
    transition: background .6s ease-in-out, color .6s  ease-in-out;
    overflow: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.fg.dark}
  }
`
