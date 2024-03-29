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

export interface IUserResponse {
  id: string
  fullName: string
  email: string
  imgUrl: string
  categories: string[]
  emailVerified?: boolean
}

export interface ICategory {
  id: string
  name: string
}
export interface IUserUpdate {
  fullName: string
  categories: string[]
}
export interface IPasswordUpdate {
  id: string
  oldPassword: string
  password: string
}

export class ProfileModel {
  @observable currentUser: IUserResponse
  @observable loading: boolean
  appModel: AppModel

  constructor(appModel: AppModel) {
    this.appModel = appModel
  }

  @action
  init = (currentUser: IUser) => {
    this.currentUser = {
      ...currentUser,
      categories: map(currentUser.categories, ({ id }) => id),
    }
  }

  @action
  getCurrentUser = async () => {
    try {
      const { data } = await profileService.getCurrentUser<IUser>()
      this.currentUser = {
        ...data,
        categories: map(data.categories, ({ id }) => id),
      }
    } catch (error) {
      console.log('TODO: ', error)
    }
  }

  @action
  async updateCurrentUser(updateData: IUserUpdate) {
    try {
      const { data } = await profileService.updateCurrentUser<IUser>(
        updateData.id,
        updateData,
      )
      this.currentUser = {
        ...data,
        categories: map(data.categories, ({ id }) => id),
      }
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  @action
  async updatePassword(data: IPasswordUpdate) {
    try {
      this.loading = true
      const id = this.currentUser.id
      await profileService.updatePassword<IPasswordUpdate>(id, data)
      this.loading = false
      return Promise.resolve()
    } catch (error) {
      this.loading = false
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
