import axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance } from 'axios'
import { KEYS } from '@frontend/constants'
import * as cookies from 'js-cookie'

const DEFAULT_AXIOS_CONFIG: AxiosRequestConfig = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    "Accept": 'application/json',
  },
}

export class RestClient {
  public instance: AxiosInstance

  constructor() {
    this.instance = axios.create(DEFAULT_AXIOS_CONFIG)
    this.instance.interceptors.request.use(config => {
      const accessToken = cookies.get(KEYS.ACCESS_TOKEN)
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    })
  }

  public request<T>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance.request<T>(config)
  }
}
