import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import ThemeContext from './context/theme'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import GlobaStyle from './styles/global'
import themes from './styles/themes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes.light}>
        <GlobaStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
