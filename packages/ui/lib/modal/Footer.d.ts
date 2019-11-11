import * as React from 'react';
import { IButtonProps } from '../button';
export interface FooterProps {
    okButtonProps?: IButtonProps;
    cancelButtonProps?: IButtonProps;
    handleOk?: (e: React.MouseEvent<any>) => void;
    handleCancel?: (e: React.MouseEvent<any>) => void;
    okText?: string | React.ReactNode;
    cancelText?: string | React.ReactNode;
}
export declare const CancelButton: import("styled-components").StyledComponent<typeof import("antd/lib/button/button").default, any, IButtonProps, never>;
export declare const Footer: React.FunctionComponent<FooterProps>;
