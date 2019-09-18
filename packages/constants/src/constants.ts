export const PATHS = {
  login: '/login',
  signup: '/signup',
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
