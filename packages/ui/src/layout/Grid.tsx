import styled from 'styled-components'
import {
  grid,
  GridProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  gridArea,
  GridAreaProps,
  height,
  HeightProps,
} from 'styled-system'

export interface IGridProps
  extends GridProps,
    SpaceProps,
    FlexboxProps,
    HeightProps {}

export interface IGridItemProps extends GridAreaProps, FlexboxProps {}

export const GridItem = styled.div<IGridItemProps>`
  width: 100%;

  ${gridArea}
  ${flexbox};
`

export const Grid = styled.div<IGridProps>`
  display: grid;
  &&& {
    ${space};
    ${grid};
    ${flexbox};
    ${height};
  }
`
