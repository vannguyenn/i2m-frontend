import { createGlobalStyle } from 'styled-components'
import { antStyle } from './antd'
import { normalizeStyle } from './normalize'

export const GlobalStyle = createGlobalStyle`
  ${antStyle};
  ${normalizeStyle};
`
