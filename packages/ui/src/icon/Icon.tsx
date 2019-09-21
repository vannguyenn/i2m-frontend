import { Icon as AntIcon } from 'antd'
import { color, fontSize, ColorProps, FontSizeProps } from 'styled-system'
import 'antd/lib/icon/style/index.css'
import styled from 'styled-components'
import { IconProps } from 'antd/lib/icon'

export interface IIconProps extends ColorProps, FontSizeProps, IconProps {}
export const Icon = styled(AntIcon)<IIconProps>`
  ${color};
  ${fontSize};
`
