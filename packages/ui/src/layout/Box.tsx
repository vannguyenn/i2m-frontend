import styled from 'styled-components'
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
} from 'styled-system'

export interface IBoxProps extends LayoutProps, SpaceProps, FlexboxProps {}

export const Box = styled.div<IBoxProps>`
  ${space};
  ${layout};
  ${flexbox};
`
