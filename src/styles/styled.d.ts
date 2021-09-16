import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    bg: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      body: string
      default: string
      light: string
      dark: string
    }
    fg: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      body: string
      default: string
      light: string
      dark: string
    }
  }
}
