import { action, observable, reaction, runInAction, computed } from 'mobx'
import { profileService } from '@frontend/services'
import { AppModel } from './AppModel'

export interface IUser {
  id: string
  name: string
  email: string
  imageUrl: string
  emailVerified?: boolean
}

export class ProfileModel {
  @observable currentUser: IUser
  appModel: AppModel

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  async getCurrentUser() {
    const { data } = await profileService.getCurrentUser<IUser>()

    runInAction(() => {
      this.currentUser = data
    })

    return data
  }
}
