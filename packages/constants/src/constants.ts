export const PATHS = {
  login: '/login',
  signup: '/register',
  myInfluencer: '/my-influencers',
  myProfile: '/my-account',
  influencers: '/influencers',
  detail: '/influencers/detail?tab=stats',
}

export const KEYS = {
  MASTER_DATA: 'MASTER_DATA',
  ACCESS_TOKEN: 'x-access-token',
  CURRENT_USER_ID: 'currentUserId',
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
export const API_BASE_URL = 'http://localhost:8080'
export const GOOGLE_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI
