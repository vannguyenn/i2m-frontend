import { DefaultTheme } from 'styled-components'

const colors = {
  primary: '#FF6265',
  medium: '#28a74a',
  dark: '#2f4237',
  red: '#e2574c',
  green: '#4dac4a',
  orange: '#f29132',
  yellow: '#f8e71c',
  white: '#ffffff',
  black: '#000000',
  grey: '#343434',

  primary100: '#FF6265',
  primary85: '#48b465',
  primary65: '#4aa261',
  primary45: '#a3ebb6',
  primary15: '#eafaee',
  primary5: '#f5fdf7',

  medium100: '#28a74a',
  medium5: '#e8f0e5',

  dark100: '#6D7278',
  dark85: '#4e5e55',
  dark75: '#637269',
  dark65: '#78847d',
  dark45: '#a1aaa5',
  dark30: 'rgba(109, 114, 120, 0.3)',
  dark15: '#e0e3e1',
  dark5: '#f4f5f5',

  yellow100: '#f8e71c',
  yellow15: '#fefcdd',

  red100: '#e2574c',
  red85: '#ca3d32',
  red75: '#b23228',
  red45: '#f2b3ae',
  red25: '#f8d5d2',
  red5: '#fdf3f2',

  grey100: '#3C3C3C',
  grey85: '#5c5c5c',
  grey65: '#858585',
  grey45: '#adadad',
  grey25: '#d6d6d6',
  grey15: '#eaeaea',
  grey5: '#f2f2f3',
  grey1: '#f9f9f9',

  black100: '#000000',
  black85: '#262626',
}

const space = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]

const breakpoints = ['40em', '52em', '64em', '80em']

const shadows = {
  error: `inset 0 0 0 2px ${colors.red}`,
  success: `inset 0 0 0 2px ${colors.primary}`,
  warning: `inset 0 0 0 2px ${colors.orange}`,
  info: `inset 0 0 0 2px ${colors.grey65}`,
  default: `inset 0 0 0 1px ${colors.dark30}`,
}

export const themeBase: DefaultTheme = {
  name: 'I2M',
  colors,
  space,
  breakpoints,
  shadows,
}
