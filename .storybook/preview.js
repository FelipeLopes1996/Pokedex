import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
// import { theme } from '../src/styles/theme'
import ThemeContext from '../src/context/theme'

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   backgrounds: {
//     default: 'light',
//     values: [
//       {
//         name: 'light',
//         value: theme.colors.white,
//       },
//       {
//         name: 'dark',
//         value: theme.colors.primary,
//       },
//     ],
//   },
// }

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
  },
}

export const decorators = [
  Story => (
    // <ThemeProvider theme={theme}>
    <ThemeContext>
      <Story />
      <GlobalStyles />
    </ThemeContext>
    // </ThemeProvider>
  ),
]
