import { NotificationStore } from '@frontend/core/src/stores'
import { notification } from 'antd'
import { AuthModel } from './AuthModel'

export class AppModel {
  notification: NotificationStore = null
  authModel: AuthModel = null

  constructor() {
    this.notification = new NotificationStore(notification)

    this.authModel = new AuthModel()
  }
}

export const appModel = new AppModel()
