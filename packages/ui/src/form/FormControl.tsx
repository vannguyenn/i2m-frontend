import * as React from 'react'
import { FormItem } from './Form'
import { FormItemProps } from 'antd/lib/form'
import { toString } from 'lodash'
import { FormControlProps, IFormLayout } from '@frontend/constants'
import { context } from '@frontend/core'

const getFormItemProps = (
  touched: boolean,
  error: any,
  required: boolean
): FormItemProps => {
  return {
    required,
    help: touched && toString(error),
    validateStatus: touched && error ? 'error' : undefined,
  }
}

export const FormControl: React.FunctionComponent<
  FormControlProps & FormItemProps & IFormLayout
> = ({ label, touched, error, required, children, layoutProps, ...rest }) => {
  const formItemProps = layoutProps
    ? layoutProps
    : React.useContext(context.FormItem)
  const errors = getFormItemProps(touched, error, required)

  return (
    <FormItem
      label={label}
      colon={false}
      {...formItemProps}
      {...errors}
      {...rest}
    >
      {children}
    </FormItem>
  )
}
