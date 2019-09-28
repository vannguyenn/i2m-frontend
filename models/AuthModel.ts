import { action, observable, reaction, runInAction } from 'mobx'
import { authService } from '@frontend/services'
import { KEYS, ICloudResponse } from '@frontend/constants'
import * as cookies from 'js-cookie'

export interface LoginInfo {
  email: string
  password: string
  rememberMe: boolean
}

export interface SignUpInfo {
  category?: string[]
  password: string
  name: string
  email: string
}

export interface LoginData {
  accessToken: string
  tokenType: string
}

export class AuthModel {
  @observable tokenExpires: number = 1
  @observable token: string = cookies.get(KEYS.ACCESS_TOKEN)
  @observable sucess: boolean
  @observable message: string

  constructor() {
    reaction(
      () => ({ token: this.token, expires: this.tokenExpires }),
      ({ token, expires }) => {
        if (token) {
          cookies.set(KEYS.ACCESS_TOKEN, token, { expires })
        } else {
          cookies.remove(KEYS.ACCESS_TOKEN)
        }
      }
    )
  }

  @action
  async login(data: LoginInfo) {
    try {
      const response = await authService.login<LoginData>(data)

      const {
        data: { accessToken },
      } = response
      runInAction(() => {
        this.tokenExpires = data.rememberMe ? 30 : 1
        this.token = accessToken
      })

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(
        'Cannot login. Please check your username and password.'
      )
    }
  }

  @action
  async signup(data: SignUpInfo) {
    try {
      console.log('van ', data)
      await authService.signup<ICloudResponse>(data)

      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  @action
  logout() {
    this.token = null
  }
}
