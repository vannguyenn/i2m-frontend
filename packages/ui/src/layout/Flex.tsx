import styled from 'styled-components'
import {
  FlexboxProps,
  flexbox,
  space,
  SpaceProps,
  color,
  ColorProps,
  width,
  WidthProps,
} from 'styled-system'

export interface IFlexProps
  extends FlexboxProps,
    SpaceProps,
    ColorProps,
    WidthProps {}

export const Flex = styled.div<IFlexProps>`
  display: flex;

  ${width};
  ${color};
  ${space};
  ${flexbox};
`
