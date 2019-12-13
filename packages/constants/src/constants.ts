export const PATHS = {
  login: '/login',
  signup: '/register',
  myInfluencer: '/my-influencers',
  myProfile: '/my-account',
  influencers: '/influencers',
  detail: '/influencers/detail?tab=stats',
  influencerDetail: '/influencers/detail',
  influencerRanking: '/influencers/ranking',
}

export const KEYS = {
  ACCESS_TOKEN: 'x-access-token',
  REDIRECT_URL: 'redirectUrl',
}

export const SERVICES = {
  BaseService: Symbol('BaseService'),
}

export const VALIDATION_MESSAGE = {
  REQUIRED: 'This field is required.',
  EMAIL: 'Please enter a valid email address.',
  MAX_LENGTH: (maxLength: number) =>
    `Only contain maximum ${maxLength} characters.`,
}

export const ERROR_CODE = {
  existed_username: 'existed-username',
  existed_email: 'existed-email',
}

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000'
export const API_BASE_URL =
  process.env.NEXT_APP_PROXY || 'http://localhost:8080'
export const GOOGLE_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI

export const MESSAGES = {
  SAVE_SUCESS: 'Save successfully.',
  existing_influencer: 'Influencer is already saved to this list.',
  pack_not_found: 'This list no longer exists.',
  SEND_MAIL_SUCCESS: 'Send email successfully.',
  SEND_MAIL_ERROR: 'Sorry! email delivery failure',
  pack_name_existed: 'This name is already existed.',
}

export enum MODE {
  CREATE = 'create',
  EDIT = 'edit',
}

export enum POST_STATUS {
  MOST_COMMENT = 'MOST_COMMENT',
  LATEST = 'LATEST',
  MOST_LIKE = 'MOST_LIKE',
}

export interface IEmailTemplateProps {
  id: string
  content: string
  name: string
}
