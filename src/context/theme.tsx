import React, { ReactNode, useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
// import STORAGE from '../constants/storage'
import themes from '../styles/themes'
// import useStore from '../hooks/useStore'

export interface IProps {
  children: ReactNode
}

export const ThemeContext = React.createContext<any>([])

const Provider: React.FC<IProps> = ({ children }) => {
  // const [theme, setTheme] = useStore<DefaultTheme>(STORAGE.THEME, themes.light)
  const [theme, setTheme] = useState<DefaultTheme>(themes.light)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Provider
