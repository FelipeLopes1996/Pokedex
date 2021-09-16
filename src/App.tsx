import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ThemeContext from './context/theme'
import { Routes } from './routes'
import GlobaStyle from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <GlobaStyle />
        <Routes />
      </ThemeContext>
    </BrowserRouter>
  )
}

export default App
