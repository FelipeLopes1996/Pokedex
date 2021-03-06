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
  body {
    font-size: 1.6rem;
  }
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  } */
  /* a,
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

  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.fg.dark}
  } */
`
