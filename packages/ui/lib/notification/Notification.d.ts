import * as React from 'react';
import { ConfigProps, NotificationPlacement } from 'antd/lib/notification';
import 'antd/lib/notification/style/index.css';
import 'antd/lib/icon/style/index.css';
export interface INotificationProps extends ConfigProps {
    message: React.ReactNode;
    description?: React.ReactNode;
    btn?: React.ReactNode;
    key?: string;
    onClose?: () => void;
    duration?: number | null;
    icon?: React.ReactNode;
    placement?: NotificationPlacement;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    type?: string;
    onClick?: () => void;
    actionComponent?: React.ReactNode;
}
export declare const GROVE_NOTIFICATION = "grove-notification";
export { NotificationPlacement };
export interface INotificationApi {
    open: (props: INotificationProps) => string;
    success: (props: INotificationProps) => string;
    error: (props: INotificationProps) => string;
    info: (props: INotificationProps) => string;
    warning: (props: INotificationProps) => string;
    close: (key: string) => void;
    config: (props: ConfigProps) => void;
    destroy: () => void;
}
export declare const notification: INotificationApi;
