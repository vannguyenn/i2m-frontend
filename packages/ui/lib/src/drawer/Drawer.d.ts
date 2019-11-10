import * as React from 'react';
import 'antd/lib/drawer/style/index.css';
import { DrawerProps } from 'antd/lib/drawer';
export interface IDrawerProps extends DrawerProps {
    className?: string;
}
export declare const Drawer: import("styled-components").StyledComponent<React.FunctionComponent<IDrawerProps>, any, IDrawerProps, never>;
