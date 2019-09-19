import * as React from 'react'

export interface ILayoutProps {
  labelCol?: object
  wrapperCol: object
}

export interface IFormLayout {
  layoutProps?: ILayoutProps
}

export interface FormControlProps {
  label: string | React.ReactNode
  touched?: boolean
  error?: any
  required?: boolean
  children: any
  labelAlign?: 'left' | 'right'
  [key: string]: any
}

export interface ICloudResponse {
  success: boolean
  message: string
}

export interface ISelectOption {
  value: any
  label: string | React.ReactNode
}
