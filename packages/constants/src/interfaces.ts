import * as React from 'react'
import { AxiosResponse } from 'axios'
import { ICategory } from '../../../models/AuthModel'

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
export interface I2MResponse {
  success: boolean
  message: string
}

export interface ISelectOption {
  value: any
  label: string | React.ReactNode
}

export interface IPostProps {
  id: string
  code: string
  commentCount: number
  likeCount: number
  thumbnailUrl: string
  content: string
  video: boolean
  viewCount: number
  engagement: number
  type: string
}
export interface IInfluencerProps {
  id: string
  fullName: string
  biography: string
  followers: number
  username: string
  mediaCount: number
  profilePicUrl: string
  externalUrl?: string
  email?: string
  engagement: number
  category: string[]
  followings: string
  verified: boolean
  posts?: IPostProps[]
  categories?: ICategory[]
}

export interface ITopInfluencerProps {
  mail_count: number
  id: string
  full_name: string
  biography: string
  followers: number
  username: string
  email?: string
  profile_pic_url: string
  media_count: number
  is_verified: boolean
  engagement: number
  followings: number
}
