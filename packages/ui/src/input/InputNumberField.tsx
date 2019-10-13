import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { FormItemProps } from 'antd/lib/form'
import { FormControl } from '../form'
import { InputNumber } from './InputNumber'

interface CustomInputProps {
  layoutProps?: { wrapperCol: object; labelCol: object }
}

export const InputNumberField: React.FunctionComponent<
  FieldRenderProps<HTMLInputElement> & FormItemProps & CustomInputProps
> = ({
  input,
  meta: { error, touched } = {},
  label = '',
  required,
  layoutProps,
  ...rest
}) => {
  return (
    <FormControl
      label={label}
      touched={touched}
      error={error}
      required={required}
      {...layoutProps}
    >
      <InputNumber {...input} {...rest} />
    </FormControl>
  )
}
