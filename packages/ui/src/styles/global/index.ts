import { createGlobalStyle } from 'styled-components'
import { antStyle } from './antd'
import { normalizeStyle } from './normalize'
import { notificationStyle } from './notification'

export const GlobalStyle = createGlobalStyle`
  ${antStyle};
  ${normalizeStyle};
  ${notificationStyle};
`
