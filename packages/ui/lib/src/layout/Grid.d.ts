import { GridProps, SpaceProps, FlexboxProps, GridAreaProps, HeightProps } from 'styled-system';
export interface IGridProps extends GridProps, SpaceProps, FlexboxProps, HeightProps {
}
export interface IGridItemProps extends GridAreaProps, FlexboxProps {
}
export declare const GridItem: import("styled-components").StyledComponent<"div", any, IGridItemProps, never>;
export declare const Grid: import("styled-components").StyledComponent<"div", any, IGridProps, never>;
