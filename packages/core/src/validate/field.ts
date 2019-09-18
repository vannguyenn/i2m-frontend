import { isEmpty, trim } from 'lodash'
import { VALIDATION_MESSAGE } from '@frontend/constants'
import * as yup from 'yup'

export const required = (value: any) =>
  value && !isEmpty(trim(value)) ? undefined : 'This field is required.'

export const maxLength = (length: number = 80) => (value: any) => {
  return isEmpty(value) || value.length <= length
    ? undefined
    : `Only contain maximum ${length} characters.`
}

export const minLength = (length: number = 4) => (value: any) => {
  return !isEmpty(value) && value.length >= length
    ? undefined
    : `Contain at least ${length} characters.`
}

export const matchPassword = (value, allValues) =>
  value !== allValues.password && 'Should match with Password.'

export const email = (value: any) => {
  const schema = yup.string().email(VALIDATION_MESSAGE.EMAIL)
  try {
    value && schema.validateSync(value)
    return undefined
  } catch (error) {
    return error.message
  }
}
