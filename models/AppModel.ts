import { ProfileModel } from './ProfileModel'
import { NotificationStore } from '@frontend/core/src/stores'
import { notification } from 'antd'
import { AuthModel } from './AuthModel'

export class AppModel {
  notification: NotificationStore = null
  authModel: AuthModel = null
  profileModel: ProfileModel = null

  constructor() {
    this.notification = new NotificationStore(notification)

    this.authModel = new AuthModel()
    this.profileModel = new ProfileModel(this)
  }
}

export const appModel = new AppModel()
