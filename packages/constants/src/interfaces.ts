import * as React from 'react'
import { AxiosResponse } from 'axios'

export interface ILayoutProps {
  labelCol?: object
  wrapperCol: object
}

export interface IFormLayout {
  layoutProps?: ILayoutProps
}

export interface IDataResponse<TData = any> {
  data: TData
}

export type IResponse<T> = AxiosResponse<IDataResponse<T>>

export interface FormControlProps {
  label: string | React.ReactNode
  touched?: boolean
  error?: any
  required?: boolean
  children: any
  labelAlign?: 'left' | 'right'
  [key: string]: any
}
export interface I2MResponse<T> {
  data: T
  success: boolean
  message: string
}

export interface ISelectOption {
  value: any
  label: string | React.ReactNode
}
