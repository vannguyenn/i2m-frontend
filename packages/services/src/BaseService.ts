import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { SERVICES } from '@frontend/constants'
import { Service } from '@frontend/ioc'
import { RestClient } from './RestClient'

@Service(SERVICES.BaseService)
export abstract class BaseService {
  protected abstract name: string

  protected restClient: RestClient

  constructor(restClient: RestClient) {
    this.restClient = restClient
  }

  private request<T>(url: string, config: AxiosRequestConfig): AxiosPromise<T> {
    const finalUrl = `${this.name}${url}`
    return this.restClient.request({ ...config, url: finalUrl })
  }

  protected get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.request(url, config)
  }

  protected put<T, TData = any>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.request(url, { ...config, data, method: 'PUT' })
  }

  protected post<T, TData = any>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.request(url, { ...config, data, method: 'POST' })
  }

  protected delete<T, TData = any>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.request(url, { ...config, data, method: 'DELETE' })
  }
}
