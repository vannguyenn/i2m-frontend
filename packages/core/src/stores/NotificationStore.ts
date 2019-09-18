import { observable, action } from 'mobx'
import { ArgsProps, NotificationApi } from 'antd/lib/notification'

export interface IMessage extends ArgsProps {
  scope?: string
}

export class NotificationStore {
  @observable messages: IMessage[] = []
  @observable notification: NotificationApi

  constructor(notification: NotificationApi) {
    this.notification = notification

    this.notification.config({
      placement: 'bottomRight',
    })
  }

  @action
  open(message: IMessage) {
    this.push(message)
    return this.notification.open(message)
  }

  success(message: IMessage) {
    return this.open({ type: 'success', ...message })
  }

  error(message: IMessage) {
    return this.open({ type: 'error', ...message })
  }

  warn(message: IMessage) {
    return this.open({ type: 'warning', ...message })
  }

  info(message: IMessage) {
    return this.open({ type: 'info', ...message })
  }

  @action
  push(message: IMessage) {
    this.messages.push(message)
  }
}
