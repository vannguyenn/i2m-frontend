import * as React from 'react';
import { PopoverProps } from 'antd/lib/popover';
import 'antd/lib/popover/style/index.css';
interface IPopover extends PopoverProps {
    className?: string;
}
export declare const Popover: import("styled-components").StyledComponent<React.FunctionComponent<IPopover>, any, PopoverProps, never>;
export {};
