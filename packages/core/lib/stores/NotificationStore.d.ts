import { ArgsProps, NotificationApi } from 'antd/lib/notification';
export interface IMessage extends ArgsProps {
    scope?: string;
}
export declare class NotificationStore {
    messages: IMessage[];
    notification: NotificationApi;
    constructor(notification: NotificationApi);
    open(message: IMessage): void;
    success(message: IMessage): void;
    error(message: IMessage): void;
    warn(message: IMessage): void;
    info(message: IMessage): void;
    push(message: IMessage): void;
}
