import { action, observable, reaction, runInAction, computed } from 'mobx'
import { profileService } from '@frontend/services'
import { AppModel } from './AppModel'
import { map } from 'lodash'

export interface IUser {
  id: string
  fullName: string
  email: string
  imgUrl: string
  categories: ICategory[]
  emailVerified?: boolean
}

export interface ICategory {
  id: string
  name: string
}
export interface IUserUpdate {
  fullName: string
  categories: ICategory[]
}
export interface IPasswordUpdate {
  id: string
  oldPassword: string
  password: string
}

export class ProfileModel {
  @observable currentUser: IUser
  appModel: AppModel

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  init = (currentUser: IUser) => {
    this.currentUser = currentUser
  }

  @action
  getCurrentUser = async () => {
    try {
      const { data } = await profileService.getCurrentUser<IUser>()

      runInAction(() => {
        this.currentUser = data
      })

      return data
    } catch (error) {
      console.log('TODO: ', error)
    }
  }

  @action
  async updateCurrentUser(data: IUser) {
    try {
      await profileService.updateCurrentUser<IUserUpdate>(data.id, data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  @action
  async updatePassword(data: IPasswordUpdate) {
    try {
      const id = this.currentUser.id
      await profileService.updatePassword<IPasswordUpdate>(id, data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  @action
  async updateAvatar(file: any) {
    try {
      await profileService.uploadAvatar(file)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
